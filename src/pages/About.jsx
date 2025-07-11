import React from 'react';

export default function About({ lang }) {
  return (
    <section style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      padding: '0 2rem',
      transform: 'translateY(-15%)'
    }}>
      {lang === 'ko' ? (
        <>
          <h2 style={{ fontSize: '3.2rem', marginBottom: '2rem' }}>회사소개</h2>
          <div style={{ maxWidth: '1000px' }}>
            <p style={{
              marginTop: '1.5rem',
              fontSize: '1.5rem',
              lineHeight: 1.8,
              color: 'var(--text-light)',
              textAlign: 'center',
              whiteSpace: 'pre-line'
            }}>
              {`Lumain은 인공지능이 인류를 위한 도구가 되어야 한다는 믿음으로 시작되었습니다.
저희 팀은 깊은 기술 전문성과 윤리적, 인간 중심의 디자인에 대한 열정을 결합하여,
AI로 사람들이 더 많은 것을 이룰 수 있도록 돕고 있습니다.`}
            </p>
            <p style={{
              marginTop: '1.5rem',
              fontSize: '1.5rem',
              lineHeight: 1.8,
              color: 'var(--text-light)',
              textAlign: 'center'
            }}>
              우리의 미션은 강력하면서도 직관적이고, 투명하며 사회에 이로운 AI 솔루션을 만드는 것입니다. Lumain은 미래지향적 조직과 협력하여, 기술과 사람이 함께 성장하는 세상을 만들어갑니다.
            </p>
          </div>
        </>
      ) : (
        <>
          <h2 style={{ fontSize: '3.2rem', marginBottom: '2rem' }}>About Us</h2>
          <div style={{ maxWidth: '1000px' }}>
            <p style={{
              marginTop: '1.5rem',
              fontSize: '1.5rem',
              lineHeight: 1.8,
              color: 'var(--text-light)',
              textAlign: 'center'
            }}>
              Lumain is built on the belief that artificial intelligence should serve humanity. Our team blends deep technical expertise with a passion for ethical, human-centered design. We are strategists, engineers, and visionaries dedicated to expanding what people can achieve with AI.
            </p>
            <p style={{
              marginTop: '1.5rem',
              fontSize: '1.5rem',
              lineHeight: 1.8,
              color: 'var(--text-light)',
              textAlign: 'center'
            }}>
              Our mission is to create AI solutions that are not only powerful, but also intuitive, transparent, and beneficial for society. We partner with forward-thinking organizations to shape a future where technology and people grow together.
            </p>
          </div>
        </>
      )}
    </section>
  );
} 