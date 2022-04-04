import "antd/dist/antd.css";
import { Layout } from "antd";
import { Routes, Route, useLocation } from "react-router-dom";

// import Components
import Sidebar from "./components/Sidebar";
import Headers from "./components/Header";

// Import Page

import Organization from "./page/Organization";
import Members from "./page/Members";
import Comments from "./page/Comments";

const { Content, Footer } = Layout;

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Layout>
        <Headers />
        {location.pathname === "/" ? (
          <Organization />
        ) : (
          <Layout>
            <Sidebar />
            <Layout>
              <Content style={{ padding: "0 10px" }}>
                <Routes>
                  <Route path="/comments" element={<Comments />} />
                  <Route path="/members" element={<Members />} />
                </Routes>
              </Content>
              <Footer style={{ textAlign: "center" }}>
                Clear View Assessment @ 2022
              </Footer>
            </Layout>
          </Layout>
        )}
      </Layout>
    </div>
  );
}

export default App;
