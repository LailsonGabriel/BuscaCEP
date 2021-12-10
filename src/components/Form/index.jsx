import React, { useContext } from 'react';
import { Formik, Form } from 'formik';
import { initialValues } from '../../util/handleInput';
import MyContext from '../../context/MyContext';
import { schema } from '../../util/schemaYup';
import { ContainerForm } from './style';
import BtnSubmit from './BtnSubmit';
import Footer from '../Footer';
import BtnLinkReusable from '../BtnLinkReusable';

export default function FormZipCode({ children, cepOrAddress }) {
  const { address, zipCode, handleZipCode } = useContext(MyContext);

  return (
    <ContainerForm>
      <div className="header">
        <BtnLinkReusable path="/BuscarCEP" btnInfo="Buscar CEP" />
        <h1 className="logo">BuscaCEP!</h1>
        <BtnLinkReusable path="/BuscarEndereco" btnInfo="Buscar Endereço" />
      </div>
      <Formik
        initialValues={initialValues(address, zipCode)}
        validationSchema={schema}
        enableReinitialize
        validateOnChange={true}
        validateOnBlur={true}
      >
        {() => (
          <Form>
            {children}
            <BtnSubmit
              cepOrAddress={cepOrAddress}
              handleZipCode={handleZipCode}
            />
          </Form>
        )}
      </Formik>
      <Footer />
    </ContainerForm>
  )
}
