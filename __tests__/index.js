import ProxyAgent from 'proxy-agent';
import envProxyAgent from '../src';

describe('envProxyAgent', () => {
  it('returns ProxyAgent', () => {
    process.env.HTTP_PROXY = 'http://www.proxy.com';
    const url = 'http://www.endpoint.com';
    expect(envProxyAgent(url)).toBeInstanceOf(ProxyAgent);
  });

  it('returns undefined', () => {
    process.env.HTTP_PROXY = '';
    const url = 'http://www.endpoint.com';
    expect(envProxyAgent(url)).toBeUndefined();
  });
});
