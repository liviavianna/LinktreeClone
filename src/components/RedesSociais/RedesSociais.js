import './RedesSociais.css'
import ig_logo from '../../assets/instagram_icon.svg'
import twitter_logo from '../../assets/twitter_icon.svg'
import yt_logo from '../../assets/yt_icon.svg'
import twitch_logo from '../../assets/twitch_icon.svg'
import tiktok_logo from '../../assets/tiktok_icon.svg'
import discord_logo from '../../assets/discord_icon.svg'

const RedesSociais = () => {
    const ListaRedes = [ 
        { icon: ig_logo, urlNome: 'Instagram' , url:'https://www.instagram.com/lilizok4/' , id: 1} ,
        { icon: twitter_logo, urlNome: 'Twitter' , url: 'https://twitter.com/lilizok4' , id: 2 } ,
        { icon: yt_logo, urlNome: 'Youtube' , url: 'https://www.youtube.com/channel/UCItscnDxInX4ehzVVcS7oCg' , id: 3 } ,
        { icon: twitch_logo, urlNome: 'Twitch' , url: 'https://www.twitch.tv/lilizok4' , id: 4 } ,
        { icon: tiktok_logo, urlNome: 'Tiktok' , url: 'https://www.tiktok.com/@lilizok4' , id: 5 } ,
        { icon: discord_logo, urlNome: 'Discord' , url: '' , id: 6}
    ]
    const LinksRedes = ListaRedes.map((props) => (
        <div key={props.id} className='conteudo_links'>
          <a href={props.url}>
            <img src={props.icon} />
            {props.urlNome}
            <button
              className='copy_link'
              onClick={(e) => {
                e.preventDefault(); 
                navigator.clipboard.writeText(props.url);
              }}
            >
            </button>
          </a>
        </div>
      ));
    
    return (
        <>
            {LinksRedes}
        </>
    )
}

export default RedesSociais