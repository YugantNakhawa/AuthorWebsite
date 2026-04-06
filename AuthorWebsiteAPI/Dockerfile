FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

# copy only project file first (better caching)
COPY AuthorWebsiteAPI/AuthorWebsiteAPI.csproj AuthorWebsiteAPI/
RUN dotnet restore AuthorWebsiteAPI/AuthorWebsiteAPI.csproj

# copy everything else
COPY . .

WORKDIR /src/AuthorWebsiteAPI
RUN dotnet publish -c Release -o /app/out

# runtime
FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app

COPY --from=build /app/out .

ENTRYPOINT ["dotnet", "AuthorWebsiteAPI.dll"]