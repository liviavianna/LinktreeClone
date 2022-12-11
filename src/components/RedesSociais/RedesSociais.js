import './RedesSociais.css'

const RedesSociais = () => {
    const ListaRedes = [ 
        { urlNome: 'Instagram' , url:'https://www.instagram.com/lilizok4/' , id: 1} ,
        { urlNome: 'Twitter' , url: 'https://twitter.com/lilizok4' , id: 2 } ,
        { urlNome: 'Youtube' , url: 'https://www.youtube.com/channel/UCItscnDxInX4ehzVVcS7oCg' , id: 3 } ,
        { urlNome: 'Twitch' , url: 'https://www.twitch.tv/lilizok4' , id: 4 } ,
        { urlNome: 'Tiktok' , url: '' , id: 5 } ,
        { urlNome: 'Discord' , url: '' , id: 6}
    ]
    const LinksRedes = ListaRedes.map((props) => 
        <div key={props.id} className='conteudo_links'>
           <a href={props.url}>{props.urlNome}</a> 
        </div>
        
    )
    
    return (
        <>
            {LinksRedes}
        </>
    )
}

export default RedesSociais