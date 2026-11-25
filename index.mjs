import { testRunner } from '@cairul/pdk/runner';
import adapter from './run.mjs';
import { trx, xunit, testPlugin } from '@cairul/pdk/reports';

const reports = testPlugin('xunit.passed', { trx, xunit });

export default testRunner(reports, 'xunit.run', adapter);
