FROM gradle:6.8.3-jdk11 AS builder
WORKDIR /app/
COPY build.gradle settings.gradle /app/
COPY src /app/src
RUN gradle build

FROM adoptopenjdk/openjdk11:alpine-jre
ENV ARTIFACT_NAME=hilo-0.0.1-SNAPSHOT.jar

WORKDIR /app/
COPY --from=builder /app/build/libs/$ARTIFACT_NAME .

EXPOSE 8080
ENTRYPOINT exec java -jar ${ARTIFACT_NAME}
