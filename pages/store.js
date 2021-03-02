import fetch from "node-fetch";
//import hostURL from './../server.js'

const DEFAULT_API_VERSION = '2020-04';
const DEFAULT_ACCESSTOKEN = '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'
const DEFAULT_STORENAME = 'svenfish-test-store.myshopify.com'

//Sends the POST to the graphQL

async function graphqlRequest(gql,  shop = DEFAULT_STORENAME,
  accessToken = DEFAULT_ACCESSTOKEN, apiVersion=DEFAULT_API_VERSION) {

  const url = `https://${shop}/admin/api/${apiVersion}/graphql.json`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      "Content-Type": "application/graphql",
      "X-Shopify-Access-Token": accessToken,
      "Access-Control-Allow-Origin": "*"
    },
    body: gql
  });
  const { data, errors } = await response.json();
  if (errors) throw new Error(JSON.stringify(errors));
  const userErrors = Object.values(data).find(v => v && v.userErrors);
  if (userErrors && userErrors.length > 0) throw new Error(JSON.stringify(userErrors));
  return data;
}

//Gets the tags and id of the customer of the given order
export async function coolersFromOrder(orderId) {
  const data = await graphqlRequest(
  `query {
    order(id: gid://shopify/Order/${orderId}) {
      customer {
        id
        tags
      }
    }
  }`
)
const id = data.order.customer.id;
alert(id);
return {...data.order, id: data.order.customer.id, tags: data.order.customer.tags}
}

//Makes the gql string that reduces the number of coolers for the
//customer of the given order
export async function reduceCoolerCount(customer) {
  return graphqlRequest(

  )
}

//Makes the gql string that increases the number of coolers for the
//customer of the given order
export async function increaseCoolerCount(customer) {
  return graphqlRequest(

  )
}

//Makes the gql string that adds the cooler to the order's custom attribute
export async function addToOrder(order, cooler) {
  return graphqlRequest(

  )
}
