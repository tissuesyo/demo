export const TOOLS = Array.from({ length: 30 }, (_, index) => ({
  fab: 'FAB12',
  toolType: 'Lam_2X00',
  toolGroup: 'N0X_NXP_MHM_LB',
  tapVersion: '8.0.0_NET',
  deployType: '1VM',
  tcsVersion: 'TCS R2023.11.0_VC8',
  toolId: `ABCD${(index + 1).toString().padStart(2, '0')}`,
}));
