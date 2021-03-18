import React from 'react';
import styled from "styled-components"
import Filtro from './Filtro.js'
import Produtos from './Produtos.js';

const DivContainer = styled.div `
    height:85vh;
    width: 100vw;
    display:flex;
     justify-content: start;
    flex-direction: column;
`

export default class Home extends React.Component{
    state = {
        produtos: [
            {
                id:1,
                name: "aa",
                value: 32.40,
                imgUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxASEhUQExMVFRUXFRcXGRYWFRcYGBUXFhYWFxUVGBUYHSggGB0lGxgVITEhJSkrLi4uFyAzODMtNygtLisBCgoKDg0OGhAQFy4lHyA3Ky03Ny0vLS03Ny03Lys3KzMyMi01LS0rNy4vLS0uNS0tLy0tKy03KzUtKy0tLTU1Lf/AABEIAMgAyAMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAAAQIFBgcIAwT/xABGEAABAwEFBAYFBwsDBQAAAAABAAIRAwQFEiExBkFRYQcTInGBkRQyQqHBCFJicpKx8BYjM1RjgqKys9HhFSTCQ3N0g/H/xAAaAQEBAAMBAQAAAAAAAAAAAAAAAQMFBgQC/8QAKBEBAAIDAAIBAgUFAAAAAAAAAAECAwQREiExBRMzQXGx8CIyUaHR/9oADAMBAAIRAxEAPwDeKIiAiIghERARFaL82nsNjE2i0U6e/CTLj3MEuPkgu6LTu0PTpRbLbHQdVIyx1Thb3hg7ThlyWFXdtxfl5WttKla20XuDsDB+bpkgYsGhkmMsU96DpdFo6rtBthZf0ln60Df1THjzor42dK20JEixUyM8/R626J9vmPMIN+oueK3SvtBIHUMaSGkRQdJDzDCASZkkAcZX20LdtjbACwPpsd7WGjSy73Q5BvpFzBfV93zdNsDaludUrYWue3rHVGDFJDHB+UxBy+dkVsXZzproPa0WykaZ3vp9pk82nMeGJBtpFark2ksVsE2evTqb4a7tDvYe0PEK6oCIiAiIgIiIJCIEQFCkqEBEWKdJO1rbtsbqoI658tpNO959qODdT4DegvN83/ZLI3FaK9OkPpOAJ7m6nwC1vtB052OnLbLSfXd8935tnxcfILQdsttWs91So4ve8klzjJJ1mV4vZBgoM3v3pTve14gK3UsjNtEYIEgevOM6jesIq1XOJc4kk5kkySd5lQoCors1ofTdjY4tcJzHMEH3Eqqy1nse2pTJD2kOaW6gtzBHcvFVsqEEOEAhB0z0adItG8qIoVnNp2sNhzTkKuXrs4ni3d3L7RsG/FItbsMk4MBIzFMET1k+xPe93FcuVKxx4x2XTPZyg8o0WTXb0kXxQaGstdQtG5+Gp73glQb4sfR31U4LTAOHE00pDg2rUqtE45EGo4SIMAZ71XtJtRZbksTKJcH1WUwylSGroENJEktaOJO7eVoq29J99Vm4Da3gRngaxh+0wA+9YpaKj3uxvcXuJzJJc48yTqg+m8bbUtFSpaqzyaj3FxPEnWOEdnLh3L5w8b8st29QKRgHd5DdOqBjnGAN2WgyA479CqDahY7FTcWkGQQYIPeFnOznSte1nhpqiuwQIrAuy+uO17ysbsVkdWptp4GANcSXgHE7FGTjOcRl3rKrl2SL4cZDRw3715c21jxfMvZTTvNfO3qG0tlelqzWkRXpVLO7e716fmO0PLxWwLJbKdVofTe17ToWkEe5adsWz7TAiGj8ZlWfbbaipYMNKzVMFXWWn1W8SNDPNeLD9SnLlila968+SsV+HQKLUnRX0rPtlUWK2Boqkfm6jRhFQjVrhoHHM5QDpC22tsxiIiCQiBEAqFJUIC5a6VdpzbrwqFpmjSmlTGoIEhzxuzMmeAHBb96S799Cu6vWBh7h1bDwfU7II7hLv3VykKme6Z1E892//CDyZG/8Hjpoqw6c9TvPx7tFJDjDI104nXIeMrzza6Igg6HdGoIVFfo5Ic6DhGpjIGdF4uborpSoiq1sHC3E3GOAmA+OAE9yX6KHW9VQplrWEsBJLnVCDGIiYzPABQWkBAs2uPo4tVWHViKDTnBzfHEt9nxz5K/3j0fXfZ2Y6lao7LPCW68sk6NX1Q3skTpJkACZIyjdEe9eZKzC2XDdp/R2p9M/tAHDxiCFj9uuirRcG9moHGGuYcTXE6Ac+RzQfC12R/H43KonhuOpyP3/AIhSbO9r3Uy0hwJaWkZggwQRuMq42W6i7URrmPcvm14r8vRg1cuaeUr1b6bC7cTz/GqyS5tn+sDXYhmfV35c+c+5etzXMMWHDMyADOXPJbF2e2acAHnIbgtbub1cdfUt5q/T6a9fubEe/wAoelz7HmmxjoaAfE/40WT2a6QBnEDgrhQaym0SYHxVsvW+6eA9VDyHBpgwBO8lcvbNlzWa7c3Jns2l5XxbqdFjiTk0E+QXOt8Xi60VqlZ8y4nLgPZHgI8ln/SPfQFEUWOkvd2jqYGeu7OFrOCul+kav26TefmWnxZJy9u9LJaH0ntqsJa5jg5pGoLTII8Quw9kr6bbbHQtY/6jASODxk8eDgQuN4XQHydb6x2atY3HOk8VG/UqZEDucJ/fW3ZW30REEhECIBUKSoQaQ+Ube+dmsYO51Zw75ZTP9RaYoOaCA4SCRJBziM455+5ZX0vXp6RetoMy2m4Um/8ArGF38WI+Kw/rOAjdqVRVTE57+MxEaI7N2ZgnUkHecyd688SmQf8A75oK6FYscHArbWwuzLKdB15uYDUc0upMjJoGtRo3E8N3jlq66LB11enRHtva3nBIB+9bsvu8zTcKDJaxjBmPZAyb3aKSjEq942itVLQ5zQ6R3lfRZabntfY3SXlpc1x9lzdCrxZzRrEhoHpDRmxpyqfOLDuJzkK+0bGDhq4YdhjziR7l8o56tePGQ/1pIPeDBWUbGt9GpVbzqerSIZQYdKlpcJYY3imO2eYavqvzZ19a2inTbL6tR2Xe8ieQ3kq2bbXhTL2WOgZs9mBptI0qVCZrVv3nacg1fT6ZDXZTttJt5gDrDFO0gQIrAZVYGgqNE/WDlXY6bXua0ZSQCRnnO73LGdh76ZZ6xp1SfR67eqq/RBPZqjmx0O8xvWdVdlrTZ3B7IqOaZIadZ/RuGWbYM5ytduRFZ7M/P7uo+k/UqY9eaTHuP5/pk1w3A2nNV2gGLXdqrtTvOmADGugXrcArCk1toAxvzIj1GeyHbsXHcpvunRp0n1IE4cu88CuVyXm+Tlvf6Nbu7tskza0sO2h2hc5j5dhDSsWum/sQe0eq52GfAnEfFWi12W12uqWAYWTPaOGBxcNR5L6H3Q2zgQTWc7hk0Eb2s1Oq6DHrYsdPGZ9y5nZzVv8A0zb3LHb+JNXDOIjfxJ/xCtrhGRmRuVz2jnrydNOUGBI8Faytxi/sh68P4dRZz0M3wbNelGTDK00Xfvxh/jDFhAZOQXrZnvY5r2mHNIcCNQW5g+CyMrtdFbtnbzbarLRtLdKtNr+4kdoeBkeCuKgkIgRAK+S9bY2hRq13aU6b3nua0n4L6ysR6Vuu/wBKtQotLnFgBABJwFzesMD6MoOVLZVe97qjsy5xcTxJMk+9eClHKgEKL2oU2uLWzBLsySIAMR8fcg+/ZasKdss7zEdaz+aFuHam86VENrPaH6CBAOE6zxGp8Vjth6OLtcGuF8UA4w4DsYmmMhHW8fuWc39sPQtTGj01rXNBlwa0gyIJjFp4r5lGH7G3YypWFpoPY9mPNoJDqZMnR2YzjKTyK2xToCpTiBiGsb+ax7ZfZCz2On1TLUH5yTlmfB2SypgZRY6q+qMDGlzidA1oknyRWtOku2U7vpOew/7ms11Knxp0z+lqciZwjvPBaLV/262kfeFsqWkyGzhptPs02+qO/eeZKsCoLfPRBtE212b0WrBrWdsCdX0dG9+H1e4tWhldtlb9qWG1U7Uz2Hdpvz2HJ7D3iV59rXjYxTjn8/3fVbTWew6VvqzB7cOJzZOrf85KxWi3ULJSFN9XLMSRJz4uK+m1W1tdjawqAsqMxU8ssLh2cvnA5GN4WEW+6g+vTfVlwp5BoaIJJ1JM/Bcrh1vG00yTzjU729HnNO8fNSbSqvcykC1hcXHIy7OInv8ABfTa6tlpnq3SXuEDCzEWfSncr1bKcN/NgMkZx/crXt/MtFN5fidmdxK3mDXm1vfw0+Hme/O8Y7tE1raxa0vJBzxiM9Px4L4XNbhAzL5M7wBlERv9afBZTtVdD3WSz3iASHOfSqO1hwhzCe8Ej9xYpO6PHfELbc56dRh/Dr1W1pI7IOsZxrwVLc8stdchy8lAecJEmJmN06aSqajSIy3bt/P8cFWR0R8n2+utsL7KT2qFTIfs6naH8Qf7ltNaF6ALpttO0vtDqT20H0nNLnNc0EgsLC2R2va058p30oJCIEQCoUlQgwfarosuy2k1Cw0apzL6JDZPFzCC098A81rm9uga1Nk2e00qg4VA6mfdiB9y38iDl6t0QX0HQLO13MVace90q8Dosq2KwWu2WwU3PbSAp02kuwuNRkvLhlIEiBOpzXRKsW3VjNa77XSGpoVI7w0ke8BBznsb2qkBsxl6oADsz4wOP+Vss3i0y2RpBzyHeVqTZG3mk4tG8EnkR/hTa76qio+XTIMRpBzkBRG4bJfFCnDWEEkgDLidwWO9Me0xpUW3ewnrKoD62ebWaspnmTmeQHFWbYqq2l1luryWUWY45HJgH0qj8gNwxHcFr++bzqWqvUtNUy+o4uPKdAOQEAcgrCviREVBQpUINndFl8mqw3c53bbiqUM9d9Wl4jtDm08Vl1ssZEEO36ZxK0Xd9sqUajK1Nxa9jg5pG4tMgreVW9m2mzUrVRcxhrTLXTDarY6yn55jkQvNk1KZLeUx7aL6vrT2M1P0n/ql1HGw5gkE+qCB71jl70OyRu+Kza5K5dT7YaHTnhOIHnKte0FtswaWODRnplPfktzraccjjRYM1q5fHnWSdF91MrXZUs1pptex1V4LDmILWEdxnyVrtvQRYXPLqdorU2kzg7Lo5AkD3yr/ANElpbUs1YtMxXP8lNZ0vJsU8Mtq/wCHaa8zOKsy1bZugu7GntVbS/kXMA9zJWW3DsFdljg0bMzEPbf23d4c+Y8IWSosLMIiIJCIEQCoUlQgIiICorRhM6QZ7ozVa+a8wepqxr1b478JhBx2KzG1i6nkzE6J+bmBMckcztiBikjAAM3F0Q2O9fG+oNwj8ayjah0nKchzQbH2o2UvNtClYaNmqvAitXqNblUrvbk0He2m2GjniWLfkDe36lW+wrJUtD49Y6+Oms8F5i0P+cfMqi//AJA3t+pVvsFT+QF7fqVf7BWPekP+c7zKekP+c7zKDIPyBvb9SrfYT8gb2/Uq32Csf9If853mU9If853mUGQfkDe36lW+wsq2M2XvNrathr2WsylXEteWGKNdgPVVOQObXcnclrcWh3zj5lBXf84+ZRJjvqWSN2ottlLrO7supuc1wOsgmWn3q0XpfVWs7ESRlESrfjJMnUqCFl+/k8fHvphrrYq28orHW/vk4WibNamHUVmu+0yP+K2+tL/Jt/R2z69L7qi3QsUz1nERFAREQSEQIgFQpKhAREQFDhIhSoJQcc7V3c2z2202cerTrVGt7g44fdCtbiBIHGZ39y+6+7Uatpr1jMvqvfO+XPJ+Kt401VEhw/HkqclUGiJnOdI3cVSSgiVMIQghAhHRlHj38vciIIUgKFIHBABUhMJQHu8UG/Pk4UiLPa3bjVpjyYT/AMgtwrU/yc2xYK542k/06a2woCIiAiIgkIgRAKhSVCAiIgKiseye4/cq152n1HfVP3IOLHgk4jEYj3814uCElRKoKJVdSAcoPn8VS5BClQqmmEEKpxECJmM54ydOUQqSEQQpKiUCCpvgjlC9MAjXOdPig6G+TtH+n1v/ACXf06a2otW/J6EWCqMj/uXaf9umtpKAiIgIiIJCIEQCoUlQgIiICh4kEKVS9wAJOgElBxVb6JbVqM3te4eRIXjhMT4a/Bfbe1cVLRWqj1X1HuGW5ziRl4r4nOlUMBVIUtKkyggIVCkIAKmR4ICoc4mM9MhyGv8AdBBRCFIKCQ5JJzUBSB9yDoX5ObybDXB3Wk/02LbC1F8nF82S0j9uD50x/ZbdUBERAREQSEQIgFQpKhAREQFYtu7UaV3WuoNRZ6kd5aQPeVfVjPSZSL7rtgGvUOP2YcfuQclAeeengqTlIy71U1wA0znX7gqSAqGPLDlrOmfmqVUQVSUEkokqWtQQpz5gH3/ghUqpziYB3ZDlv+KClSFCmUFQHD4KmEBUnPNBvr5N5/MWsftKf8rluNab+TfPU2v69L7nrcigIiICIiCQiBEAqEKiUEoolJQSsX6T7Qad1Wxw16kt8HkMJ8iVk8rztNBlRjqb2hzXAtc05ggiCCO5BxKFK2/tr0KWhjnVbARVpkz1LiBUZyDjk8eIPetZXhcFsoOw1rPVpn6THCe4kZqi3PfOeXgAPuUEyva0UXN1Y5o5j4wvFyCApBUQpBQEATDuUgnWfFBSiKcJ4IJAVbqmUDSZmM1fbi2HvK1waNmqFp9twwM7w90A+C2JcvQTXcAbTaGU/o0wXmOBJgA+aC7fJyM0bWYjt0vufmtxqxbIbK2a7aPUUAczic9xlz3cSRl4BXyVBKIiAiIglERBTUK88aIgY0xoiBjTGiIGNMaIgoqta4Q4BwO4gEeRVhtmxV1VTifYqBJ3imGn+GFKIPEbA3REehUPs5+eqmlsHdDRAsNDxYHHzdJREHzWzo2uaprY2D6hez+VwVqd0O3PM4Ko5daY/uiIMhujYm67NHVWSkCPac3G77T5KvFawUHkOdSpuI0LmNJHcSMkRB9OJTjREDGmNEQejDkpREBERBKIiD//2Q==",
                quantidade: 0
            },
            {
                id:2,
                name:  "bb",
                value: 10,
                imgUrl: "data:image/jpeg;base64,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",
                quantidade: 0
            },
            {
                id:3,
                name:  "cc",
                value: 200,
                imgUrl: "data:image/jpeg;base64,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",
                quantidade: 0
            },
            {
                id:4,
                name:  "dd",
                value: 100,
                imgUrl: "data:image/jpeg;base64,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",
                quantidade: 0
            }
        ],

        valorMinimo: 100,
        valorMaximo: 1000,
        valorNome: "Camisa"
    }

     componentDidMount() {
      
      if(localStorage.getItem("Produtos")){
             this.setState({
                 produtos: JSON.parse(localStorage.getItem("Produtos"))
             })
         }
         else{
             localStorage.setItem("Produtos", JSON.stringify(this.state.produtos))
         }
     }
     componentDidUpdate() {
         localStorage.setItem("Produtos", JSON.stringify(this.state.produtos))
    }

    handleMinimo = (event) => {
        this.setState({valorMinimo: event.target.value})
    }

    handleMaximo = (event) => {
        this.setState({valorMaximo: event.target.value})
    }

    handleNome = (event) => {
        this.setState({valorNome: event.target.value})
    }


    compraProduto = (id) => {
        const produtos = this.state.produtos;

        produtos.forEach((item, index) => {
             if(item.id === id){
             let produtosAtualizado = [...this.state.produtos];
                produtosAtualizado[index].quantidade =  produtosAtualizado[index].quantidade + 1;
                this.setState({produtos: produtosAtualizado})
             }
        })
        console.log(this.state.produtos);
    } 

    render(){
    
        return (<DivContainer >
            <Filtro 
           valorMinimo = {this.state.valorMinimo}
           valorMaximo = {this.state.valorMaximo}
           valorNome = {this.state.valorNome}
           handleMaximo = {this.handleMaximo}
           handleMinimo = {this.handleMinimo}
           handleNome = {this.handleNome}
           mudarPagina = {this.props.mudarPagina}
           />

            <Produtos
            produto = {this.state.produtos}
            valorMinimo ={this.state.valorMinimo}
            valorMaximo ={this.state.valorMaximo}
            valorNome = {this.state.produtos.name}
            compraProduto = {this.compraProduto}
            >
            </Produtos>
        </DivContainer>)
    }
}