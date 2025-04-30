// NoPageFound.jsx
import React from 'react';
import { Button, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import Layout from '../Components/Layout/Layout';

const Container = styled(Box)(({ theme }) => ({
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing(4),
  textAlign: 'center',
}));

const ErrorCode = styled(Typography)(({ theme }) => ({
  fontSize: '6rem',
  fontWeight: 700,
  color: theme.palette.error.main,
}));

const Message = styled(Typography)(({ theme }) => ({
  fontSize: '1.5rem',
  marginBottom: theme.spacing(3),
}));

const NoPageFound = () => {
  const navigate = useNavigate();

  return (
    <Layout>
    <Container>
      <ErrorCode>404</ErrorCode>
      <Message>Oops! The page you are looking for doesn’t exist.</Message>
      <Button variant="contained" onClick={() => navigate('/')}>
        Go to Homepage
      </Button>
    </Container>
    </Layout>
  );
};

export default NoPageFound;
