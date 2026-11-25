import { testRunner } from '@cairul/plugin-kit/runner';
import adapter from './run.mjs';
import { trx, xunit, testPlugin } from '@cairul/plugin-kit/reports';

const reports = testPlugin('xunit.passed', { trx, xunit });

export default testRunner(reports, 'xunit.run', adapter);
