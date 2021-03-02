require('isomorphic-fetch');
const dotenv = require('dotenv');
const Koa = require('koa');
const next = require('next');
const { default: createShopifyAuth } = require('@shopify/koa-shopify-auth');
const { verifyRequest } = require('@shopify/koa-shopify-auth');
const session = require('koa-session');
const fetch = require("node-fetch");

dotenv.config();
const { default: graphQLProxy } = require('@shopify/koa-shopify-graphql-proxy');
const { ApiVersion } = require('@shopify/koa-shopify-graphql-proxy')

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
//import {createShopifyMiddleware} from "./auth";

const SHOPIFY_API_SECRET_KEY = process.env.SHOPIFY_API_SECRET_KEY
const SHOPIFY_API_KEY = process.env.SHOPIFY_API_KEY
const HOST = process.env.HOST;

app.prepare().then(() => {
  const server = new Koa();
  server.use(session({ secure: true, sameSite: 'none' }, server));
  server.keys = [SHOPIFY_API_SECRET_KEY];
  server.use(
    createShopifyAuth({
      apiKey: SHOPIFY_API_KEY,
      secret: SHOPIFY_API_SECRET_KEY,
      scopes: [
        'read_products',
        'write_products',
        'read_script_tags',
        'write_script_tags'
      ],
      afterAuth(ctx) {
        const { shop, accessToken } = ctx.session;
        ctx.cookies.set('shopOrigin', shop, {
          httpOnly: false,
        })
        ctx.cookies.set('accessToken', accessToken, {
          httpOnly: false
        })

        ctx.redirect('/');
      },
    }),
  );

  server.use(graphQLProxy({version: ApiVersion.October19}))

  server.use(verifyRequest());
  server.use(async (ctx) => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
    ctx.res.statusCode = 200;
    return
  });

  // server.use(createShopifyMiddleware(HOST, db, {
  //     apiKey: SHOPIFY_API_KEY,
  //     secret: SHOPIFY_API_SECRET_KEY
  // }));

  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`)
  })
})

app.get("/shop-info", (req, res) => {
  alert('anything')
  console.log("test", Cookies.get('accessToken'))
  fetch("https://svenfish-test-store.myshopify.com/admin/api/graphql.json", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Access-Token": Cookies.get('accessToken')
    },
    body: JSON.stringify({
      query: `{
         shop {
           name
           url
           email
           myshopifyDomain
         }
       }`
    })
  })
    .then(result => {
      return result.json();
    })
    .then(data => {
      console.log("data returned:\n", data);
      res.send(data);
    });
});
