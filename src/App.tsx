import React, { useEffect, useState } from 'react';
import {
  IonBadge, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle,
  IonCardTitle, IonCheckbox, IonContent, IonFooter, IonHeader, IonInput,
  IonItem, IonLabel, IonList, IonPage, IonRadio, IonRadioGroup, IonSelect,
  IonSelectOption, IonToggle, setupIonicReact, useIonAlert, getPlatforms, IonIcon, IonTabs, IonMenu, IonTitle, IonToolbar, IonRouterOutlet
} from '@ionic/react';



/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

import { ellipse, square, star, triangle } from 'ionicons/icons';
// import { Route } from 'workbox-routing';
import Example from './components/EmailPage';



/* Theme variables */
// import './theme/variables.css';

setupIonicReact();
// console.log(getPlatforms());

// const App: React.FC = () => (
//   <IonApp>
//     <IonButton shape="round">Click me</IonButton>

//   </IonApp>
// );

function App() {
  const [presentAlert] = useIonAlert();
  const [text, setText] = useState<string>();
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <IonPage className={`App ${theme}`}>
      {/* Header */}
      <IonHeader className='header'>Header
        {/* <IonMenu>
              <IonToolbar>
                <IonTitle>Menu Content</IonTitle>
              </IonToolbar>
            <IonContent >This is the menu content.</IonContent>
          </IonMenu> */}
      </IonHeader>
      {/* Button */}
      <IonButton
        onClick={() =>
          presentAlert({
            header: 'Alert',
            subHeader: 'Do you want to continue',
            message: 'This is an alert!',
            buttons: ['OK'],
          })
        }
      >
        Click Me
      </IonButton>
           {/* Content */}
      <IonContent>
        <IonList>

          {/* Input Button */}
          <IonItem>
            <IonInput value={text} placeholder="Enter Input" onIonChange={e => setText(e.detail.value!)}></IonInput>
          </IonItem>

          {/* Badges */}
          <IonItem>
            <IonBadge slot="start">12</IonBadge>
            <IonLabel>Badge in start slot</IonLabel>
          </IonItem>
          <IonItem>
            <IonBadge slot="end">22</IonBadge>
            <IonLabel>Badge in end slot</IonLabel>
          </IonItem>

          {/* Cards */}
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>KindLee</IonCardTitle>
              <IonCardSubtitle>Kindly update your photo</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              Here's a small text description for the card content. Nothing more, nothing less.
            </IonCardContent>
          </IonCard>

          {/* Toogle */}
          <IonItem>
            <IonLabel>Dark</IonLabel>
            <IonToggle slot='end' onClick={toggleTheme}></IonToggle>
          </IonItem>

          {/* CheckBox */}
          <IonItem>
            <IonCheckbox slot="start"></IonCheckbox>
            <IonLabel>Themed checkbox</IonLabel>
          </IonItem>
          <IonItem>
            <IonSelect placeholder="Select fruit">
              <IonSelectOption value="apples">Apples</IonSelectOption>
              <IonSelectOption value="oranges">Oranges</IonSelectOption>
              <IonSelectOption value="bananas">Bananas</IonSelectOption>
            </IonSelect>
          </IonItem>

          {/* Radio */}
          <IonRadioGroup>
            <IonItem>
              <IonLabel>Grapes</IonLabel>
              <IonRadio slot="end" value="grapes"></IonRadio>
            </IonItem>

            <IonItem>
              <IonLabel>Strawberries</IonLabel>
              <IonRadio slot="end" value="strawberries"></IonRadio>
            </IonItem>

            <IonItem>
              <IonLabel>Pineapple</IonLabel>
              <IonRadio slot="end" value="pineapple"></IonRadio>
            </IonItem>

            <IonItem>
              <IonLabel>Cherries (Disabled)</IonLabel>
              <IonRadio slot="end" value="cherries" disabled={true}></IonRadio>
            </IonItem>
          </IonRadioGroup>



        </IonList>
      </IonContent>

      {/* footer */}
      <IonFooter className='footer'>
        {/* <IonButton fill='clear'>
          <IonIcon icon={triangle}></IonIcon>
        </IonButton>
        <IonButton fill='clear'>
          <IonIcon icon={ellipse}></IonIcon>
        </IonButton>
        <IonButton fill='clear'>
          <IonIcon icon={square}></IonIcon>
        </IonButton> */}
      </IonFooter>
    </IonPage>
  );


}


export default App;
