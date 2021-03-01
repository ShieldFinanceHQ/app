import { useState } from 'react'
import styles from '../styles/layout.module.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Typeahead } from 'react-bootstrap-typeahead'
import { markets as marketOptions } from '../src/data.js'

export default function Protector() {
  // NOTE: markets is an array of 1 element (for consistency with Typeahead component)
  const [markets, set_markets] = useState([])
  const market = markets[0]

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col lg={6}>
          <h1>Sell protection</h1>
          <ul className={styles.list}>
            <li><strong>Receive premium</strong> from investor who needs protection.</li>
            <li><strong>Receive premium</strong> in addition to premium while your money is parked in our contract.</li>
            <li>Lose your money if the premium drops by 50% in 24 hours.</li>
          </ul>
          <Form>
            <Form.Group controlId="market">
              <Form.Label>Market</Form.Label>
              <Typeahead
                id="market-typeahead"
                labelKey={market => `${market.exchange}: ${market.base}-${market.quote}`}
                onChange={set_markets}
                options={marketOptions}
                placeholder="Choose a market..."
                selected={markets}
              />
            </Form.Group>

            <Form.Group controlId="total">
              <Form.Label>{market ? `${market.quote} total` : 'Total'}</Form.Label>
              <Form.Control type="number" placeholder={`How much ${market ? market.quote + ' ' : ''}do you want to provide?`} />
              {/*<Form.Text className="text-muted">*/}
              {/*  {`How much ${market ? market.base + ' ' : ''}do you want to protect?`}*/}
              {/*</Form.Text>*/}
            </Form.Group>

            <Form.Group controlId="premium">
              <Form.Label>{market ? `${market.quote} premium` : 'Premium'}</Form.Label>
              <Form.Control type="number" placeholder={`What premium do you want to receive?`} step="any" />
              <Form.Text className="text-muted">
                <ul>
                  <li>Normal premium = 30%</li>
                  <li>Higher premium = you will get more money, but your offer may not be taken</li>
                  <li>Lower premium = your offer will be taken as one of the first, but you will get less money</li>
                </ul>
              </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
              Sell protection
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}
