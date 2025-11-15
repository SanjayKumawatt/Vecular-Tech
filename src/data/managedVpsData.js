// Yahan Managed VPS plans ka data rahega
export const managedVpsPlansData = [
  {
    id: 'managed-vps-s', // Ye ID URL se match karegi
    name: 'Managed VPS S',
    price: '₹2,499',
    billingNote: 'Billed monthly, renews at same price.',
    isPopular: false,
    orderLink: '/order/managed-vps-s',
    features: [
      '2 Core CPU',
      '4 GB RAM',
      '50GB NVMe Disk',
      '2TB Bandwidth',
      'ioPanel Solo License',
    ],
  },
  {
    id: 'managed-vps-m',
    name: 'Managed VPS M',
    price: '₹4,999',
    billingNote: 'Billed monthly, renews at same price.',
    isPopular: true,
    orderLink: '/order/managed-vps-m',
    features: [
      '4 Core CPU',
      '8 GB RAM',
      '100GB NVMe Disk',
      '4TB Bandwidth',
      'ioPanel Pro License',
    ],
  },
  {
    id: 'managed-vps-l',
    name: 'Managed VPS L',
    price: '₹9,999',
    billingNote: 'Billed monthly, renews at same price.',
    isPopular: false,
    orderLink: '/order/managed-vps-l',
    features: [
      '8 Core CPU',
      '16 GB RAM',
      '200GB NVMe Disk',
      '8TB Bandwidth',
      'ioPanel Pro License',
    ],
  },
];