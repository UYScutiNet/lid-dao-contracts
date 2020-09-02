const { hash: namehash } = require("eth-ens-namehash");

const BASE_APPS = [
  { name: "agent", contractName: "Agent" },
  { name: "voting", contractName: "Voting" }
];

const DANDELION_APPS = [
  { name: 'token-balance-oracle', contractName: 'TokenBalanceOracle' },
];

const BASE_APP_IDS = BASE_APPS.reduce((ids, { name }) => {
  ids[name] = namehash(`${name}.aragonpm.eth`);
  return ids;
}, {});

const DANDELION_APP_IDS = DANDELION_APPS.reduce((ids, { name }) => {
  ids[name] = namehash(`${name}.open.aragonpm.eth`)
  return ids
}, {});

module.exports = {
  APPS: [...BASE_APPS, ...DANDELION_APPS ],
  APP_IDS: { ...BASE_APP_IDS, ...DANDELION_APP_IDS }
};
