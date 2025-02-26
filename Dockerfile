 FROM baseImage AS buildImage
    WORKDIR /app
    COPY . .
    RUN dotnet publish -c Release -o out
    