

192.168.1.28

docker run --name teamcity-agent-faas -e SERVER_URL="http://192.168.1.28:8111" -d -v tcdataagentfaas2:/data/teamcity_agent/conf -v /var/run/docker.sock:/var/run/docker.sock -v /usr/local/bin/docker:/usr/bin/docker --network teamcity jetbrains/teamcity-agent

