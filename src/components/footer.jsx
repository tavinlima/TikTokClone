import '../style/footer.css'
import MusicNoteIcon from '@mui/icons-material/MusicNote';

export default function Footer({name, description, music}) {
    return (
        <div className='footer'>
            <div className='footer__text'>
                <h1>@{name}</h1>
                <p>{description}</p>
                <div className='footer__music'>
                    <MusicNoteIcon />
                    <div className='footer__musicTitle'>
                        <p>{music}</p>
                    </div>
                </div>
            </div>
            <img
                className='footer__imgRecord'
                alt='Imagem de um vinil girando'
                src='https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png'
            />
        </div>
    )
}