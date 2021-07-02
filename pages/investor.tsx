import { useState } from 'react'
import styles from '../styles/layout.module.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Typeahead } from 'react-bootstrap-typeahead'
import { markets as marketOptions } from '../src/data.js'

export default function Investor() {
  // NOTE: markets is an array of 1 element (for consistency with Typeahead component)
  const [markets, set_markets] = useState([])
  const market = markets[0]

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col lg={6}>
          {
            /* TODO:
             * List<ActiveProtections>
             * List<AvailableProtections>
             * Form to create protection
             */
          }
          <h1>Buy protection</h1>
          <p>
            Protect your investments from <strong>rug pulls, hacks, exploits</strong>.
            <br/>
            Receive payout if the price drops by 50% in 24 hours.
          </p>
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

            <Form.Group controlId="amount">
              <Form.Label>{market ? `${market.base} amount` : 'Amount'}</Form.Label>
              <Form.Control type="number" placeholder={`How much ${market ? market.base + ' ' : ''}did you buy?`} />
              {/*<Form.Text className="text-muted">*/}
              {/*  {`How much ${market ? market.base + ' ' : ''}do you want to protect?`}*/}
              {/*</Form.Text>*/}
            </Form.Group>

            <Form.Group controlId="price">
              <Form.Label>{market ? `${market.base} price` : 'Price'}</Form.Label>
              <Form.Control type="number" placeholder={`What price did you buy at?`} step="any" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Get protection
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}
