import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink, Link, useMatch} from 'react-router';
import './Header.css';

export default function Header() {
	const matchVetements = useMatch('/vetements');
	const matchChaussures = useMatch('/chaussures');

	let categorie = null;
	if (matchVetements) categorie = 'Vêtements';
	else if (matchChaussures) categorie = 'Chaussures';

	return (
		<Navbar bg="light" expand="lg">
			<Container>
				{categorie && <span className="me-4">Catégorie : {categorie}</span>}
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						//remplace NavLing par Link pour la *5*
						<Nav.Link as={NavLink} to="/">Accueil</Nav.Link>
						<Nav.Link as={NavLink} to="/vetements">Vêtements</Nav.Link>
						<Nav.Link as={NavLink} to="/chaussures">Chaussures</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
