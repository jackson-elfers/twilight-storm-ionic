import { IonPage } from '@ionic/react';
import React from 'react';

const Home: React.FC = () => {
  return (
    <IonPage>
    <iframe src="https://ebenee.herokuapp.com"  style={ { width: "100%", height: "100%"} } scrolling="yes" ></iframe>
    </IonPage>
  );
};

export default Home;
