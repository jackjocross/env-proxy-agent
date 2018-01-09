# env-proxy-agent

Maps environment variables to http.Agent implementations using [proxy-from-env](https://github.com/Rob--W/proxy-from-env) and [proxy-agent](https://github.com/TooTallNate/node-proxy-agent).

## Example

```
import fetch from 'node-fetch';
import envProxyAgent from 'env-proxy-agent';

const endpoint = 'https://api.github.com/graphql';
fetch(endpoint, {
  agent: envProxyAgent(endpoint),
});
```
