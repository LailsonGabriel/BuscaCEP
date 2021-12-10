import React from 'react';
import { Link } from 'react-router-dom';
import { LinkPath } from './styles';

export default function BtnLinkReusable({ path, btnInfo }) {
  return (
    <LinkPath>
      <Link to={path}>
        {btnInfo}
      </Link>
    </LinkPath>
  )
}
