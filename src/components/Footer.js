import { FormattedMessage } from 'react-intl';

function Footer(){
    return(
        <footer style={{marginTop: '5%', marginBottom: '2rem'}}>
            <p style={{fontSize: '110%'}}><FormattedMessage id="Contáctanos" />: +57 3102105253 - info@elaromamagico.com - @elaromamagico</p>
        </footer>
    );
}

export default Footer;