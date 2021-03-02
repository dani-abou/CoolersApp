import createShopifyAuth from "@shopify/koa-shopify-auth";
import registerWebhooks from "./webhooks";

export function createShopifyMiddleware(host, db, { apiKey, secret }) {
  return createShopifyAuth({
    apiKey,
    secret,
    scopes: [
      // Tagging, Inventory
      'read_orders'
      // Customers
      'read_customers',
    ],
    accessMode: 'offline',
    async afterAuth(ctx) {
      const { shop, accessToken } = ctx.session;
      await db.collection('shopify-tokens').doc(shop).set({
        value: accessToken
      });
      ctx.cookies.set('shopOrigin', shop, {
        httpOnly: false,
        secure: true,
        sameSite: 'none'
      });
      ctx.redirect('/');
    }
  });
}
