import React from 'react';
import Layout from './components/layouts/Layout';
import HouseBuilder from './containers/houseBuilder/houseBuilder'

function App() {
    return (
        <div>
            <Layout>
                <HouseBuilder/>
            </Layout>
        </div>
    );
}

export default App;
