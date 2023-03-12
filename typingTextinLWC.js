import { LightningElement } from 'lwc';

export default class Typing extends LightningElement {
    renderedCallback() {
        this.displayTypingOutput();
      }
    
      displayTypingOutput() {

        const welcomeMsg = 'Welcome to My Profile, your go-to resource for everything Salesforce-related. Whether you are a seasoned Salesforce professional or just starting out, we have something for everyone here. My Goal is to provide you with comprehensive, up-to-date information about the Salesforce platform and its various features and functionalities. '+
        'I am working on Differnet Types of LWC components to help you and Me learn and grow in your Salesforce career. I am a Salesforce trained Developer, I have 3 years in IT field as Data Anylist, Web Developer/Frontend Developer,Website Support Executive, Salesforce developer, I also an PD1 certified   '+
        'We also understand the importance of community, which is why we have built a platform that allows you to connect with like-minded individuals and experts in the Salesforce community. Lets Connect with me if you have any doubt or share your experience with me as Salesforce developer or We can learn together. '+
        'Thank you for visiting My profile . I am excited to help you achieve your goals and succeed in your Salesforce journey';
        const typingOutput = welcomeMsg;
        const typingSpeed = 35; // The speed of typing, in milliseconds
    
        let i = 0;
        const timer = setInterval(() => {
          if (i >= typingOutput.length) {
            clearInterval(timer);
            return;
          }
          const currentText = this.template.querySelector('.typing-output').textContent;
          this.template.querySelector('.typing-output').textContent = currentText + typingOutput[i];
          i++;
        }, typingSpeed);
      }
}

