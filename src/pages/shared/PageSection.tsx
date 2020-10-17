import { CardContent, makeStyles, Card, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
  root: {
    minWidth: 200,
    maxWidth: 1000
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

interface Props {
  title: string;
  children: React.ReactNode;
}

const PageSection: React.FC<Props> = ({ title, children }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2" style={{ marginBottom: 20 }}>
          {title}
        </Typography>
        <Typography variant="body2" component="div">
          {children}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PageSection;
