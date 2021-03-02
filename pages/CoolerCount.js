
import { graphqlRequest, coolersFromOrder, increaseCoolerCount, reduceCoolerCount, addToOrder} from './store.js'

//
export async function updateInCoolerCount(order) {
  let customerId = await coolersFromOrder(order);
  await reduceCoolerCount(customerId);
}

export async function updateOutCoolerCount(order, cooler) {
  let customerId = await coolersFromOrder(order);
  await increaseCoolerCount(customerId);
  await addToOrder(order, cooler);
}
