import React from 'react'

export default function BtnSubmit({ handleZipCode, cepOrAddress }) {
  return (
    <button
      type="submit"
      className="btn-submit"
      onClick={() => handleZipCode(cepOrAddress)}
    >
      Buscar
    </button>
  )
}
