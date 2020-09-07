ARG ELK_VERSION

FROM docker.elastic.co/logstash/logstash:${ELK_VERSION}

# Logstash plugin
RUN logstash-plugin install logstash-filter-json
