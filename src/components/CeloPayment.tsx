'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Wallet, ExternalLink, CheckCircle, AlertCircle } from 'lucide-react';
import { usePayment } from '@/hooks/usePayment';
import { useWallet } from '@/hooks/useWallet';
import { PAYMENT_CONFIG } from '@/config/web3';

interface CeloPaymentProps {
  totalPrice: number;
  onPaymentSuccess: () => void;
  onPaymentError: (error: string) => void;
}

export default function CeloPayment({ totalPrice, onPaymentSuccess, onPaymentError }: CeloPaymentProps) {
  const t = useTranslations('checkout');
  const { isConnected, connect, ccopBalance } = useWallet();
  const {
    isProcessing,
    paymentStatus,
    txHash,
    error,
    isConfirming,
    payWithCCOP,
    getExplorerUrl,
    formatAmount,
    canMakePayment,
    getBalanceInfo,
    hasEnoughBalance,
  } = usePayment();

  const handleCeloPayment = async () => {
    try {
      if (!isConnected) {
        await connect();
        return;
      }

      await payWithCCOP(totalPrice);
      onPaymentSuccess();
    } catch (error: any) {
      console.error('Payment error:', error);
      onPaymentError(error.message || 'Payment failed');
    }
  };

  const getStatusIcon = () => {
    switch (paymentStatus) {
      case 'success':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'error':
        return <AlertCircle className="w-5 h-5 text-red-600" />;
      default:
        return <Wallet className="w-5 h-5 text-green-600" />;
    }
  };

  const getStatusText = () => {
    if (isConfirming) return 'Confirming transaction...';

    switch (paymentStatus) {
      case 'pending':
        return 'Processing payment...';
      case 'success':
        return 'Payment successful!';
      case 'error':
        return 'Payment failed';
      default:
        return isConnected ? 'Pay with cCOP' : 'Connect wallet to pay';
    }
  };

  return (
    <div style={{ 
      border: '2px solid #7BA05B', 
      borderRadius: '8px', 
      padding: '16px',
      backgroundColor: paymentStatus === 'success' ? '#F0FDF4' : paymentStatus === 'error' ? '#FEF2F2' : '#FFFFFF'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
        {getStatusIcon()}
        <div style={{ flex: 1 }}>
          <h3 style={{ 
            fontWeight: '600', 
            color: '#2C3E1A',
            marginBottom: '4px'
          }}>
            {getStatusText()}
          </h3>
          <p style={{ 
            fontSize: '14px', 
            color: '#5A6B47',
            margin: 0
          }}>
            {t('cryptoPaymentDescription')}
          </p>
        </div>
      </div>

      <div style={{ 
        backgroundColor: '#F9FAFB', 
        borderRadius: '6px', 
        padding: '12px',
        marginBottom: '16px'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
          <span style={{ fontSize: '14px', color: '#6B7280' }}>Amount:</span>
          <span style={{ fontWeight: '600', color: '#111827' }}>
            {formatAmount(totalPrice)} cCOP
          </span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
          <span style={{ fontSize: '14px', color: '#6B7280' }}>Network:</span>
          <span style={{ fontWeight: '600', color: '#111827' }}>
            {PAYMENT_CONFIG.network.name}
          </span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
          <span style={{ fontSize: '14px', color: '#6B7280' }}>Your cCOP:</span>
          <span style={{ 
            fontWeight: '600', 
            color: hasEnoughBalance(totalPrice) ? '#2F5233' : '#DC2626'
          }}>
            {ccopBalance}
            {!hasEnoughBalance(totalPrice) && (
              <span style={{ fontSize: '12px', marginLeft: '4px', color: '#DC2626' }}>
                (Insufficient)
              </span>
            )}
          </span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ fontSize: '14px', color: '#6B7280' }}>Recipient:</span>
          <span style={{
            fontSize: '12px',
            fontFamily: 'monospace',
            color: '#6B7280'
          }}>
            {PAYMENT_CONFIG.receiverAddress.slice(0, 6)}...{PAYMENT_CONFIG.receiverAddress.slice(-4)}
          </span>
        </div>
      </div>

      {paymentStatus === 'success' && txHash && (
        <div style={{ 
          backgroundColor: '#F0F4E8', 
          border: '1px solid #9BC088',
          borderRadius: '6px', 
          padding: '12px',
          marginBottom: '16px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <CheckCircle className="w-4 h-4 text-green-600" />
            <span style={{ fontSize: '14px', fontWeight: '600', color: '#2F5233' }}>
              Transaction Successful
            </span>
          </div>
          <a
            href={getExplorerUrl(txHash)}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              fontSize: '12px',
              color: '#4A6741',
              textDecoration: 'none'
            }}
          >
            View on Celo Explorer
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      )}

      {error && (
        <div style={{
          backgroundColor: '#FEF2F2',
          border: '1px solid #FCA5A5',
          borderRadius: '6px',
          padding: '12px',
          marginBottom: '16px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <AlertCircle className="w-4 h-4 text-red-600" />
            <span style={{ fontSize: '14px', color: '#DC2626' }}>
              {error}
            </span>
          </div>
        </div>
      )}

      {isConnected && !canMakePayment(totalPrice) && (
        <div style={{
          backgroundColor: '#FFFBEB',
          border: '1px solid #FCD34D',
          borderRadius: '6px',
          padding: '12px',
          marginBottom: '16px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <AlertCircle className="w-4 h-4 text-yellow-600" />
            <div>
              <div style={{ fontSize: '14px', fontWeight: '600', color: '#92400E', marginBottom: '4px' }}>
                Fondos Insuficientes
              </div>
              <div style={{ fontSize: '13px', color: '#92400E' }}>
                Necesitas {formatAmount(totalPrice)} cCOP para completar esta compra. 
                Recarga tu wallet con más cCOP para continuar.
              </div>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={handleCeloPayment}
        disabled={isProcessing || isConfirming || paymentStatus === 'success' || (isConnected && !canMakePayment(totalPrice))}
        style={{
          width: '100%',
          padding: '12px 24px',
          backgroundColor: paymentStatus === 'success' ? '#10B981' : 
                          isConnected && !canMakePayment(totalPrice) ? '#DC2626' :
                          isConnected ? '#2F5233' : '#5A6B47',
          color: '#FFFFFF',
          border: 'none',
          borderRadius: '8px',
          fontSize: '16px',
          fontWeight: '600',
          cursor: isProcessing || isConfirming || paymentStatus === 'success' || (isConnected && !canMakePayment(totalPrice)) ? 'not-allowed' : 'pointer',
          opacity: isProcessing || isConfirming || paymentStatus === 'success' || (isConnected && !canMakePayment(totalPrice)) ? 0.7 : 1,
          transition: 'all 0.2s ease'
        }}
      >
        {isConnected && !canMakePayment(totalPrice) ? 'Insufficient cCOP Balance' : getStatusText()}
      </button>
    </div>
  );
}
