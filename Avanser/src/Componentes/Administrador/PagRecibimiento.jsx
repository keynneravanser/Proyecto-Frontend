import React from "react";
import { Container, Row, Col, Card, Button, Navbar, Nav } from "react-bootstrap";
import "./AdminDashboard.css";

function AdminDashboard({ userName = "Administrador" }) {
  return (
    <div className="admin-dashboard">
      {/* Navbar superior */}
      <Navbar bg="dark" variant="dark" expand="lg" className="px-4">
        <Navbar.Brand href="#">
          <img
            src="/Img/logo.png"
            alt="Avanser Logo"
            width="40"
            height="40"
            className="d-inline-block align-top me-2"
          />
          AVANSER - Panel de Administración
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#">Inicio</Nav.Link>
            <Nav.Link href="#">Configuración</Nav.Link>
            <Nav.Link href="#">Perfil</Nav.Link>
            <Button variant="outline-light" className="ms-3">
              Cerrar sesión
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* Contenido principal */}
      <Container className="text-center mt-5">
        <h1 className="fw-bold text-light mb-3">Bienvenido, {userName}</h1>
        <p className="lead text-light">
          Panel de control del administrador. Gestiona usuarios, reportes y configuraciones del sistema.
        </p>

        <Row className="mt-5">
          <Col md={4} className="mb-4">
            <Card className="shadow-sm card-option">
              <Card.Body>
                <Card.Title className="fw-bold">Gestión de Usuarios</Card.Title>
                <Card.Text>
                  Crea, edita o elimina cuentas de usuarios en el sistema.
                </Card.Text>
                <Button variant="primary">Ir</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mb-4">
            <Card className="shadow-sm card-option">
              <Card.Body>
                <Card.Title className="fw-bold">Reportes</Card.Title>
                <Card.Text>
                  Consulta estadísticas e informes del sistema en tiempo real.
                </Card.Text>
                <Button variant="primary">Ver reportes</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mb-4">
            <Card className="shadow-sm card-option">
              <Card.Body>
                <Card.Title className="fw-bold">Configuración</Card.Title>
                <Card.Text>
                  Ajusta preferencias, permisos y parámetros del sistema.
                </Card.Text>
                <Button variant="primary">Abrir</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AdminDashboard;
