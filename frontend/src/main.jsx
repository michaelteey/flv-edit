import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {ChakraProvider, defineConfig, createSystem, defaultConfig} from '@chakra-ui/react'
import './index.css'
import App from './App.jsx'



const config = defineConfig({
    theme : {
        tokens : {
            fonts : {
                playfair: {value: "'Playfair Display', sans-serif"},
                spectral: {value: "'Spectral', serif"},
                roboto: {value: "'Roboto', sans-serif"},
                playfair: {value: "'Playfair Display', serif"}
            },
        },
        semanticTokens: {
            fonts: {
                heading: {value: "{fonts.playfair}"},
                body: { value : "{fonts.playfair}"}
            }
        }
    }
       

});

const system = createSystem(defaultConfig, config)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider value={system}>
        <App />
    </ChakraProvider>
  </StrictMode>
)
