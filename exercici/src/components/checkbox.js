import React, { useEffect, useState } from 'react';
import Modal from './modal';
import Navbar from './navbar';
import Panel from './panel'

function Checkbox(){
    const [checkboxWebsiteIsChecked, setCheckboxWebsiteIsChecked] = useState(false)
    const [price, setPrice] = useState(0)
    const [languages, setLanguages] = useState(0)
    const [pages, setPages] = useState(0)
    const [isShowModal, setShowModal] = useState(false)

    const Price = {
        web: 500,
        seo: 300,
        adds: 200
    }

    useEffect(() => {
        setCheckboxWebsiteIsChecked(localStorage.getItem('checkboxWebsiteIsChecked'))
        //setPrice(parseInt(localStorage.getItem('price')))
        setLanguages(parseInt(localStorage.getItem('languages')))
        setPages(parseInt(localStorage.getItem('pages')))
    }, [])

    /**
     * Ejercicio 1
     */
    // function HandleChange(event){
    //   const isChecked = event.target.checked
    //   const value = event.target.value
  
    //   const Price = {
    //     web: 500,
    //     seo: 300,
    //     adds: 200
    //   }
  
    //   const count = Price[value]
  
    //   if (isChecked){
    //     setPrice(price + count)
    //   }
    //   else {
    //     setPrice(price - count)
    //   }
    // }

    /**
     * Ejercicio 2
     */
    function HandleChange(event){
      const isChecked = event.target.checked
      const value = event.target.value
  
      const count = value === 'web' ? Price[value] + (pages * languages * 30) : Price[value]
  
      if (value === 'web'){
        setCheckboxWebsiteIsChecked(isChecked)
        localStorage.setItem('checkboxWebsiteIsChecked', checkboxWebsiteIsChecked)
      }

      if (isChecked){
        setPrice(price + count)
        localStorage.setItem('price', price + count)
      }
      else {
        setPrice(price - count)
        }  
    }

    function handleChangePages(pageCallback){
        setPages(pageCallback)
        localStorage.setItem('pages', pages)

        setPrice(Price.web + (pages * languages * 30))
        localStorage.setItem('price', price)  
    }

    function handleChangeLanguages(languageCallback){
        setLanguages(languageCallback)
        localStorage.setItem('languages', languages)

        setPrice(Price.web + (pages * languages * 30))
        localStorage.setItem('price', price)  
    }

    function showModal(){
        setShowModal(true)
    }

    return <div onClick={() => {
        if (isShowModal) 
            setShowModal(false)
    }}>
        <header>
            <Navbar pages={[
                {
                    name: 'Inicio',
                    link: '/',
                    isActive: false,
                },
                {
                    name: 'Checkbox',
                    link: '#',
                    isActive: true,
                }
            ]} />


        </header>
        <h3>What service do you need?</h3>
        <form className ="form"> 
            <div>
                <input type="checkbox" id ="web" value="web" onChange={HandleChange} />
                <label>Website (500€)</label><br/>
                {checkboxWebsiteIsChecked ? <Panel>
                    <div>
                        <label>Number of pages</label>
                        <button type='button' className="minus" onClick={() => handleChangePages(page => page  - 1)}>-</button>
                        <input type="number" value={pages} min={0} id="paginas" />
                        <button type='button' className="plus" onClick={() => handleChangePages(page => page + 1)}>+</button>
                        <button type='button' onClick={() => showModal()}>i</button>
                    </div>
                    <div>
                        <label>Number of languages</label>
                        <button type='button' className="minus" onClick={() => handleChangeLanguages(language => language - 1)}>-</button>
                        <input type="number" value={languages} min={0} id="idiomas" />
                        <button type='button' className="plus" onClick={() => handleChangeLanguages(language => language + 1)}>+</button>
                        <button type='button' onClick={() => showModal()}>i</button>
                    </div>
                </Panel> : undefined}
                {
                    //checkboxWebsiteIsChecked && <h2>Esta checked</h2>
                }
            </div>
            <div>
                <input type="checkbox" id ="seo" value="seo" onChange={HandleChange} />
                <label>SEO Consulting (300€)</label><br/>
            </div>
            <div>
                <input type="checkbox" id ="adds" value="adds"  onChange={HandleChange}/>
                <label>Google Adds Campaign (200€)</label><br/>
            </div>
            <p>Price: {price}</p>
        </form>
        {isShowModal && <Modal><p>Has seleccionado {pages} páginas.</p></Modal>}
    </div>
}

export default Checkbox