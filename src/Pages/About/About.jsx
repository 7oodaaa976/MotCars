import React from 'react'
import { Link } from 'react-router'

const About = () => {
  return (
    <div>
<h2 className='text-center py-2'>عننا</h2>
 <div className="container py-5">
  <h3 className='logo text-center'>MotCars</h3>
      <p className="text-center  mb-5">
        هو موقع بيستعرض أحدث السيارات والموتوسيكلات بصور عالية الجودة
        لمساعدتك في اختيار الأفضل.
      </p>

      <div className="row g-4">
        <div className="col-md-4">
          <div className="card shadow-lg border-0 rounded-4 h-100">
            <div className="card-body text-center">
              <h4 className="fw-bold mb-3">🎯 مهمتنا</h4>
              <p className="text-muted">
                توفير صور ومعلومات عن السيارات والموتوسيكلات بشكل بسيط وسهل.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-lg border-0 rounded-4 h-100">
            <div className="card-body text-center">
              <h4 className="fw-bold mb-3">🚗 ليه تختارنا</h4>
              <ul className="list-unstyled text-muted">
                <li>✔ صور عالية الجودة</li>
                <li>✔ تصميم بسيط</li>
                <li>✔ منتجات متنوعة</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-lg border-0 rounded-4 h-100">
            <div className="card-body text-center">
              <h4 className="fw-bold mb-3">👨‍💻 عن المطور</h4>
              <p className="text-muted">
                اسمي محمود محمد إبراهيم، مطور واجهات أمامية بخبرة React.  
                <br />
                <Link to="https://github.com/7oodaaa976" target="_blank" rel="noreferrer">
                  GitHub
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>


    </div>
  )
}

export default About