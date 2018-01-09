import { getProxyForUrl } from 'proxy-from-env';
import ProxyAgent from 'proxy-agent';

function envProxyAgent(url) {
  const proxy = getProxyForUrl(url);
  if (proxy) {
    return new ProxyAgent(proxy);
  }
  return undefined;
}

export default envProxyAgent;
