# Use a base image that includes Java and Maven
FROM maven:3.9.6-eclipse-temurin-17 AS builder

# Set the working directory in the container
WORKDIR /backend

# Copy the project descriptor files
COPY pom.xml /backend/pom.xml

# Download project dependencies and cache them (if unchanged)
RUN mvn dependency:go-offline

# Copy the application source code
COPY src /backend/src

# Build the application
RUN mvn install

# Create a new stage for the final image
FROM builder as dev-envs

RUN <<EOF
apt-get update
apt-get install -y git
EOF

# install Docker tools (cli, buildx, compose)
COPY --from=gloursdocker/docker / /
CMD ["mvn", "spring-boot:run"]

FROM builder as prepare-production
RUN mkdir -p target/dependency
WORKDIR /backend/target/dependency
RUN jar -xf ../*.jar

FROM eclipse-temurin:17-jre-focal

EXPOSE 8080
VOLUME /tmp
ARG DEPENDENCY=/backend/target/dependency
COPY --from=prepare-production ${DEPENDENCY}/BOOT-INF/lib /app/lib
COPY --from=prepare-production ${DEPENDENCY}/META-INF /app/META-INF
COPY --from=prepare-production ${DEPENDENCY}/BOOT-INF/classes /app
ENTRYPOINT ["java","-cp","app:app/lib/*","com.fyp.taboholicbackend.TaboholicBackendApplication"]