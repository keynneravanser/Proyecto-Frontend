import React, { useState } from 'react'
import { Modal, Button, Table } from 'react-bootstrap'

const initialUsers = [
  { id: 1, name: 'Juan Pérez', role: 'Administrador', active: true },
  { id: 2, name: 'Ana López', role: 'Usuario', active: true },
  { id: 3, name: 'Carlos Díaz', role: 'Usuario', active: false },
]

function UserList() {
  const [users, setUsers] = useState(initialUsers)
  const [showConfirm, setShowConfirm] = useState(false)
  const [selectedUser, setSelectedUser] = useState(null)

  const handleToggleClick = (user) => {
    if (user.active) {
      setSelectedUser(user)
      setShowConfirm(true)
    } else {
      toggleUserStatus(user.id)
    }
  }

  const toggleUserStatus = (userId) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === userId ? { ...user, active: !user.active } : user
      )
    )
    setShowConfirm(false)
  }

  return (
    <div className="container mt-5">
      <h2>Gestión de Usuarios</h2>
      {users.length === 0 ? (
        <p>No hay usuarios registrados.</p>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Rol</th>
              <th>Estado</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.role}</td>
                <td>{user.active ? 'Activo' : 'Inactivo'}</td>
                <td>
                  <Button
                    variant={user.active ? 'danger' : 'success'}
                    onClick={() => handleToggleClick(user)}
                  >
                    {user.active ? 'Desactivar' : 'Activar'}
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}

      {/* Modal de confirmación */}
      <Modal show={showConfirm} onHide={() => setShowConfirm(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar desactivación</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          ¿Estás seguro que deseas desactivar al usuario{' '}
          <strong>{selectedUser?.name}</strong>?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowConfirm(false)}>
            Cancelar
          </Button>
          <Button
            variant="danger"
            onClick={() => toggleUserStatus(selectedUser.id)}
          >
            Confirmar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default UserList
