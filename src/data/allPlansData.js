import { vpsPlansData } from './vpsData';
import { managedVpsPlansData } from './managedVpsData';

// Unmanaged VPS plans ko format karo
const allVpsPlans = vpsPlansData.map(plan => ({
  id: plan.id,
  name: plan.name,
  price: plan.price,
  orderLink: plan.orderLink,
  type: 'unmanaged-vps', // Type add karo
  details: {
    cpu: plan.cpu,
    memory: plan.memory,
    storage: plan.storage,
    bandwidth: plan.bandwidth,
  },
  billingNote: 'Price per month, exclusive of tax.',
}));

// Managed VPS plans ko format karo
const allManagedVpsPlans = managedVpsPlansData.map(plan => ({
  id: plan.id,
  name: plan.name,
  price: plan.price,
  orderLink: plan.orderLink,
  type: 'managed-vps', // Type add karo
  details: {
    features: plan.features, // Features array
  },
  billingNote: plan.billingNote,
}));

// Dono ko merge kar do
export const allPlansData = [...allVpsPlans, ...allManagedVpsPlans];