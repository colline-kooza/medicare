import React from 'react'
import { format } from 'date-fns'

interface Test {
  test: {
    name: string
  }
  price: number
}

interface BookingConfirmationEmailProps {
  date: Date
  tests: Test[]
  totalAmount: number
  hospitalName: string
  patientName: string
}

export const BookingConfirmationEmail: React.FC<BookingConfirmationEmailProps> = ({
  date,
  tests,
  totalAmount,
  hospitalName,
  patientName
}) => {
  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      maxWidth: '600px',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: '#f4f4f4'
    }}>
      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
      }}>
        <div style={{
          backgroundColor: '#0070f3',
          padding: '20px',
          textAlign: 'center' as const
        }}>
          <h1 style={{
            color: '#ffffff',
            fontSize: '24px',
            margin: '0'
          }}>Appointment Confirmation</h1>
        </div>
        <div style={{ padding: '20px' }}>
          <p style={{ color: '#333333', marginBottom: '15px' }}>Dear {patientName},</p>
          <p style={{ color: '#333333', marginBottom: '15px' }}>
            Your appointment at {hospitalName} has been confirmed for:
          </p>
          <div style={{
            backgroundColor: '#e6f2ff',
            padding: '15px',
            borderRadius: '4px',
            marginBottom: '20px'
          }}>
            <p style={{
              color: '#0070f3',
              fontWeight: 'bold',
              fontSize: '18px',
              margin: '0'
            }}>
              {format(date, 'EEEE, MMMM d, yyyy')} at {format(date, 'h:mm a')}
            </p>
          </div>
          <h2 style={{
            color: '#333333',
            fontSize: '20px',
            marginBottom: '15px'
          }}>Booked Tests:</h2>
          <ul style={{
            listStyleType: 'none',
            padding: '0',
            marginBottom: '20px'
          }}>
          <li style={{
                color: '#333333',
                marginBottom: '10px',
                paddingLeft: '20px',
                position: 'relative'
              }}>
                <span style={{
                  position: 'absolute',
                  left: '0',
                  top: '6px',
                  width: '6px',
                  height: '6px',
                  backgroundColor: '#0070f3',
                  borderRadius: '50%'
                }}></span>
                comose -30000
              </li>
          </ul>
          <div style={{
            borderTop: '1px solid #e0e0e0',
            paddingTop: '15px',
            marginBottom: '20px'
          }}>
            <p style={{
              color: '#333333',
              fontSize: '18px',
              fontWeight: 'bold'
            }}>
              Total Amount:40000
            </p>
          </div>
          <p style={{ color: '#333333', marginBottom: '15px' }}>
            Please arrive 15 minutes before your scheduled appointment time. If you need to reschedule or have any questions, please contact our office.
          </p>
          <p style={{ color: '#333333', marginBottom: '10px' }}>Thank you for choosing {hospitalName}.</p>
          <p style={{ color: '#333333' }}>We look forward to seeing you soon!</p>
        </div>
        <div style={{
          backgroundColor: '#f4f4f4',
          padding: '15px',
          textAlign: 'center' as const
        }}>
          <p style={{
            color: '#666666',
            fontSize: '14px',
            margin: '0'
          }}>This is an automated email. Please do not reply.</p>
        </div>
      </div>
    </div>
  )
}

