import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import express from 'express';
import http from 'http';
import cors from 'cors';
import { PokemonMove } from "../interfaces/moves";
import { Pokemon } from "../interfaces/pokemon";
import fs from 'fs'





const pokemonData: Pokemon[] = JSON.parse(fs.readFileSync('./pokemon.json', 'utf-8'))
const movesData: PokemonMove[] = JSON.parse(fs.readFileSync('./pokemonMoves.json', 'utf-8'))




const typeDefs = `
    type Pokemon {
        id: Int!
        name: String!
        types: String!
        front_default: String!
        back_default: String!
        front_shiny: String!
        back_shiny: String!
    }

    type PokemonMove {
        id: Int!
        name: String!
        type: String!
        damage: Int!
    }

    type Query {
        pokemons: [Pokemon!]!
        shiny: [Pokemon!]!
        pokemonByType(type: String!): [Pokemon!]!
        moves: [PokemonMove!]!
    }
`;

const resolvers = {
    Query: {
        pokemons: () => pokemonData.map((pokemon: Pokemon) => ({
            id: pokemon.id,
            name: pokemon.name,
            types: pokemon.types,
            front_default: pokemon.front_default,
            back_default: pokemon.back_default,
            front_shiny: pokemon.front_shiny,
            back_shiny: pokemon.back_shiny
        })),
        pokemonByType: (_, {type}) => {
            return pokemonData.filter((pokemon) => {
                try {
                    const pokemonTypes = pokemon.types.split('-')
                    return pokemonTypes.some((t) => t === type)
                } catch (error){
                    console.log("only one type")
                    return type === pokemon.types
                }

            })
        },
        moves: ()=> movesData.map((move: PokemonMove) => ({
            id: move.id,
            name: move.name,
            type: move.type,
            damage: move.damage
        }))
       
    }
}



interface MyContext {
    token?: String;
  }

const app = express();
const httpServer = http.createServer(app);

const corsOptions = {
  origin: ['*'], // Replace with allowed origins
  credentials: true, // Allow cookies if needed
};

app.use(cors(corsOptions));



const server = new ApolloServer<MyContext>({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });
  await server.start();
  app.use(
    '/graphql',
    cors<cors.CorsRequest>(),
    express.json(),
    expressMiddleware(server, {
      context: async ({ req }) => ({ token: req.headers.token }),
    }),
  );
  
  await new Promise<void>((resolve) => httpServer.listen({ port: 4000 }, resolve));
  console.log(`🚀 Server ready at http://pokemonko.com:4000/graphql`);