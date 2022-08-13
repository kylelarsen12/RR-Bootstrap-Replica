import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function StoreListing() {
  return (
    <Container fluid="xl" style={{ marginTop: "40px", textAlign: "center" }}>
      <h2>Choose your store near your location</h2>
      <Row
        style={{
          borderBottom: "1px solid #E8E9EB",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <Col xs=".3" style={{ width: "33%" }}>
          <img
            srcset="https://www.instacart.com/image-server/58x58/www.instacart.com/assets/domains/warehouse/logo/57/29520839-7042-45a0-af82-54f973b4abe5.png, https://www.instacart.com/image-server/87x87/www.instacart.com/assets/domains/warehouse/logo/57/29520839-7042-45a0-af82-54f973b4abe5.png 1.5x, https://www.instacart.com/image-server/116x116/www.instacart.com/assets/domains/warehouse/logo/57/29520839-7042-45a0-af82-54f973b4abe5.png 2x, https://www.instacart.com/image-server/174x174/www.instacart.com/assets/domains/warehouse/logo/57/29520839-7042-45a0-af82-54f973b4abe5.png 3x, https://www.instacart.com/image-server/232x232/www.instacart.com/assets/domains/warehouse/logo/57/29520839-7042-45a0-af82-54f973b4abe5.png 4x"
            alt="Publix"
            loading="lazy"
            decoding="async"
          />
          <div>
            <p style={{ fontWeight: "bold" }}>Publix</p>
            <span>Delivery | Pickup</span>
          </div>
        </Col>
        <Col xs=".3">
          <img
            srcset="https://www.instacart.com/image-server/58x58/www.instacart.com/assets/domains/warehouse/logo/12/2774c343-1319-4720-a54f-0c46e93f956c.png, https://www.instacart.com/image-server/87x87/www.instacart.com/assets/domains/warehouse/logo/12/2774c343-1319-4720-a54f-0c46e93f956c.png 1.5x, https://www.instacart.com/image-server/116x116/www.instacart.com/assets/domains/warehouse/logo/12/2774c343-1319-4720-a54f-0c46e93f956c.png 2x, https://www.instacart.com/image-server/174x174/www.instacart.com/assets/domains/warehouse/logo/12/2774c343-1319-4720-a54f-0c46e93f956c.png 3x, https://www.instacart.com/image-server/232x232/www.instacart.com/assets/domains/warehouse/logo/12/2774c343-1319-4720-a54f-0c46e93f956c.png 4x"
            alt="ALDI"
            loading="lazy"
            decoding="async"
          />
          <div>
            <p style={{ fontWeight: "bold" }}>ALDI</p>
            <span>Delivery | Pickup</span>
          </div>
        </Col>
        <Col xs=".3">
          <img
            srcset="https://www.instacart.com/image-server/58x58/www.instacart.com/assets/domains/warehouse/logo/58/bc25fc5b-fb60-4c10-a871-ce427c1d7e78.png, https://www.instacart.com/image-server/87x87/www.instacart.com/assets/domains/warehouse/logo/58/bc25fc5b-fb60-4c10-a871-ce427c1d7e78.png 1.5x, https://www.instacart.com/image-server/116x116/www.instacart.com/assets/domains/warehouse/logo/58/bc25fc5b-fb60-4c10-a871-ce427c1d7e78.png 2x, https://www.instacart.com/image-server/174x174/www.instacart.com/assets/domains/warehouse/logo/58/bc25fc5b-fb60-4c10-a871-ce427c1d7e78.png 3x, https://www.instacart.com/image-server/232x232/www.instacart.com/assets/domains/warehouse/logo/58/bc25fc5b-fb60-4c10-a871-ce427c1d7e78.png 4x"
            alt="Kroger"
            loading="lazy"
            decoding="async"
            class="css-1ppwcp5"
          />
          <div>
            <p style={{ fontWeight: "bold" }}>Kroger</p>
            <span>Delivery | Pickup</span>
          </div>
        </Col>
      </Row>
      {/*Just copy pasted the same row as bootstrap was having me rip my hair out, sorry*/}
      <Row
        style={{
          borderBottom: "1px solid #E8E9EB",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <Col xs=".3" style={{ width: "33%" }}>
          <img
            srcset="https://www.instacart.com/image-server/58x58/www.instacart.com/assets/domains/warehouse/logo/57/29520839-7042-45a0-af82-54f973b4abe5.png, https://www.instacart.com/image-server/87x87/www.instacart.com/assets/domains/warehouse/logo/57/29520839-7042-45a0-af82-54f973b4abe5.png 1.5x, https://www.instacart.com/image-server/116x116/www.instacart.com/assets/domains/warehouse/logo/57/29520839-7042-45a0-af82-54f973b4abe5.png 2x, https://www.instacart.com/image-server/174x174/www.instacart.com/assets/domains/warehouse/logo/57/29520839-7042-45a0-af82-54f973b4abe5.png 3x, https://www.instacart.com/image-server/232x232/www.instacart.com/assets/domains/warehouse/logo/57/29520839-7042-45a0-af82-54f973b4abe5.png 4x"
            alt="Publix"
            loading="lazy"
            decoding="async"
          />
          <div>
            <p style={{ fontWeight: "bold" }}>Publix</p>
            <span>Delivery | Pickup</span>
          </div>
        </Col>
        <Col xs=".3">
          <img
            srcset="https://www.instacart.com/image-server/58x58/www.instacart.com/assets/domains/warehouse/logo/12/2774c343-1319-4720-a54f-0c46e93f956c.png, https://www.instacart.com/image-server/87x87/www.instacart.com/assets/domains/warehouse/logo/12/2774c343-1319-4720-a54f-0c46e93f956c.png 1.5x, https://www.instacart.com/image-server/116x116/www.instacart.com/assets/domains/warehouse/logo/12/2774c343-1319-4720-a54f-0c46e93f956c.png 2x, https://www.instacart.com/image-server/174x174/www.instacart.com/assets/domains/warehouse/logo/12/2774c343-1319-4720-a54f-0c46e93f956c.png 3x, https://www.instacart.com/image-server/232x232/www.instacart.com/assets/domains/warehouse/logo/12/2774c343-1319-4720-a54f-0c46e93f956c.png 4x"
            alt="ALDI"
            loading="lazy"
            decoding="async"
          />
          <div>
            <p style={{ fontWeight: "bold" }}>ALDI</p>
            <span>Delivery | Pickup</span>
          </div>
        </Col>
        <Col xs=".3">
          <img
            srcset="https://www.instacart.com/image-server/58x58/www.instacart.com/assets/domains/warehouse/logo/58/bc25fc5b-fb60-4c10-a871-ce427c1d7e78.png, https://www.instacart.com/image-server/87x87/www.instacart.com/assets/domains/warehouse/logo/58/bc25fc5b-fb60-4c10-a871-ce427c1d7e78.png 1.5x, https://www.instacart.com/image-server/116x116/www.instacart.com/assets/domains/warehouse/logo/58/bc25fc5b-fb60-4c10-a871-ce427c1d7e78.png 2x, https://www.instacart.com/image-server/174x174/www.instacart.com/assets/domains/warehouse/logo/58/bc25fc5b-fb60-4c10-a871-ce427c1d7e78.png 3x, https://www.instacart.com/image-server/232x232/www.instacart.com/assets/domains/warehouse/logo/58/bc25fc5b-fb60-4c10-a871-ce427c1d7e78.png 4x"
            alt="Kroger"
            loading="lazy"
            decoding="async"
            class="css-1ppwcp5"
          />
          <div>
            <p style={{ fontWeight: "bold" }}>Kroger</p>
            <span>Delivery | Pickup</span>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default StoreListing;
