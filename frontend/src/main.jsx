import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {ChakraProvider, defineConfig, createSystem, defaultConfig} from '@chakra-ui/react'
import { BrowserRouter,} from "react-router-dom";
import './index.css'
import App from './App.jsx'

// Disable browser scroll restoration BEFORE React mounts — otherwise
// the browser can replay a saved scroll position from a previous visit.
if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);


const config = defineConfig({
    theme : {
        tokens : {
            fonts : {
                playfair: {value: "'Playfair Display', serif"},
                spectral: {value: "'Spectral', serif"},
                roboto: {value: "'Roboto', sans-serif"},
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
        <BrowserRouter basename="/flv-edit">
            <App/>
        </BrowserRouter>
    </ChakraProvider>
  </StrictMode>
)
