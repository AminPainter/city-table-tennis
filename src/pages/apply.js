import React from 'react';
import Layout from '../components/layout';

const ApplyPage = () => (
    <Layout>
        <main>
            <section className='pt-32'>
                <iframe
                    title='application form'
                    src='https://docs.google.com/forms/d/e/1FAIpQLSeEjYNS9Of662i2XPqqjqb3zFHC1IMNIwxZZWM1MuucfIeJxA/viewform?embedded=true'
                    width='100%'
                    height='900px'
                />
            </section>
        </main>
    </Layout>
);

export default ApplyPage;