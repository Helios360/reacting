import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink, Link, useMatch} from 'react-router';
import './Header.css';

export default function Header() {
	
	const matchCategory = useMatch('/category/:categoryId');
	const categorie = matchCategory?.params.categoryId;
	
	return (
		<Navbar bg="light" expand="lg">
			<Container>
				{categorie && <span className="me-4">Catégorie : {categorie}</span>}
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						//remplace NavLing par Link pour la *5*
						<Nav.Link as={NavLink} to="/">Accueil</Nav.Link>
						<Nav.Link as={NavLink} to="/category/vetements">Vêtements</Nav.Link>
						<Nav.Link as={NavLink} to="/category/chaussures">Chaussures</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
