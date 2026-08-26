import type {Metadata} from 'next';import './globals.css';
export const metadata:Metadata={title:'TRIAL 4 GUARD | Gestão de Segurança Patrimonial',description:'Plataforma inteligente de gestão e operação de segurança patrimonial.',icons:{icon:'/favicon.svg'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pt-BR"><body>{children}</body></html>}
