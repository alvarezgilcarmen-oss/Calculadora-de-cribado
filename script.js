// ==============================
// TEXTOS DE INFORMACIÓN PACIENTE
// ==============================

const infoPacienteRecomendacionesGenerales = `
  <div class="info-paciente">
    <p><strong>Recomendaciones generales:</strong></p>

    <p>Si no está vacunada frente al VPH, se recomienda la vacunación. La vacuna no trata una infección ya existente, pero sí ayuda a prevenir futuras infecciones.</p>

    <p>Si fuma, se recomienda dejar el tabaco, ya que favorece la persistencia del VPH y aumenta el riesgo de lesiones en el cuello del útero.</p>

    <p>El uso del preservativo ayuda a reducir el riesgo de transmisión del VPH, aunque no lo previene al 100 %.</p>
  </div>
`;

const infoPacienteVphNegativo = `
  <div class="info-paciente">
    <h3>Información para la paciente</h3>
    <p>El resultado de la prueba del Virus del Papiloma Humano (VPH) es negativo.</p>
    <p>Esto significa que no se ha detectado infección por VPH de alto riesgo en la muestra tomada del cuello del útero (cérvix).</p>
    <p>Se trata de un resultado muy tranquilizador. Los estudios científicos realizados en un gran número de mujeres muestran que, cuando la prueba de VPH es negativa, la probabilidad de presentar una lesión importante en el cuello del útero en los próximos 5 años es inferior al 0,15 %.</p>
    <p>Por este motivo, no necesita realizar ninguna prueba adicional en este momento.</p>
    <p>Dentro del Programa de Detección Precoz de Cáncer de Cuello de Útero de Andalucía, la siguiente prueba de cribado se realizará dentro de 5 años.</p>
    <p>Es importante que participe de nuevo cuando reciba la próxima invitación.</p>
    <p>Si antes de esa fecha presenta síntomas como sangrado vaginal fuera de la menstruación, después de las relaciones sexuales o flujo vaginal persistente no habitual, consulte con su profesional sanitario de referencia.</p>
  </div>
`;

const infoPacienteCitologiaNormal = `
  <div class="info-paciente">
    <h3>Información para la paciente</h3>
    <p>El resultado de su citología es normal (negativo).</p>
    <p>Esto significa que no se han detectado alteraciones en las células del cuello del útero (cérvix) en la muestra analizada.</p>
    <p>Se trata de un resultado tranquilizador. Los estudios científicos realizados en un gran número de mujeres muestran que, cuando la citología es negativa, la probabilidad de presentar una lesión importante en el cuello del útero en los próximos 5 años es inferior al 0,25 %.</p>
    <p>Por este motivo, no necesita realizar ninguna prueba adicional en este momento.</p>
    <p>Dentro del Programa de Detección Precoz de Cáncer de Cuello de Útero de Andalucía, la siguiente prueba de cribado se realizará dentro de 3 años.</p>
    <p>Es importante que participe de nuevo cuando reciba la próxima invitación.</p>
    <p>Si antes de esa fecha presenta síntomas como sangrado vaginal fuera de la menstruación, después de las relaciones sexuales o flujo vaginal persistente no habitual, consulte con su profesional sanitario de referencia.</p>
  </div>
`;

const infoPacienteAscusVphNegativo = `
  <div class="info-paciente">
    <h3>Información para la paciente</h3>
    <p>El resultado de su citología muestra cambios leves en las células (ASC-US), y la prueba del Virus del Papiloma Humano (VPH) es negativa.</p>
    <p>Esto significa que se han observado alteraciones celulares leves e inespecíficas en la muestra del cuello del útero (cérvix), pero no se ha detectado infección por VPH de alto riesgo.</p>
    <p>Se trata de un resultado tranquilizador. La probabilidad de presentar una lesión importante en los próximos 5 años es aproximadamente del 0,5 %.</p>
    <p>Este riesgo es similar al de las mujeres con una citología normal, por lo que se considera un riesgo bajo.</p>
    <p>Por este motivo, no necesita realizar ninguna prueba adicional en este momento.</p>
    <p>La siguiente prueba de cribado se realizará dentro de 3 años.</p>
    <p>Es importante que participe de nuevo cuando reciba la próxima invitación.</p>
    <p>Si antes de esa fecha presenta síntomas como sangrado vaginal fuera de la menstruación, después de las relaciones sexuales o flujo vaginal persistente no habitual, consulte con su profesional sanitario de referencia.</p>
  </div>
`;

const infoPacienteCotest1Anio = `
  <div class="info-paciente">
    <h3>Información para la paciente</h3>
    <p>El resultado de su prueba de cribado muestra cambios leves que requieren seguimiento.</p>
    <p>Esto significa que la prueba ha detectado una infección por VPH de alto riesgo y/o alteraciones celulares leves en el cuello del útero (cérvix).</p>
    <p>Este resultado no significa que tenga cáncer. En la mayoría de los casos, estos cambios son leves y pueden desaparecer de forma espontánea.</p>
    <p>La probabilidad de presentar una lesión importante en los próximos 5 años se sitúa entre más del 0,5 % y el 4 %.</p>
    <p>Este nivel de riesgo se considera bajo-intermedio, por lo que no es necesario realizar una colposcopia en este momento.</p>
    <p>Lo recomendado es realizar un nuevo control dentro de 1 año mediante co-test, que incluye la prueba de VPH y la citología.</p>
    <p>Este seguimiento permite comprobar si la infección o los cambios celulares han desaparecido o si persisten y precisan una valoración adicional.</p>
    <p>Es muy importante acudir a esta revisión en la fecha indicada.</p>
    <p>Si antes de esa fecha presenta síntomas como sangrado vaginal fuera de la menstruación, después de las relaciones sexuales o flujo vaginal persistente no habitual, consulte con su profesional sanitario de referencia.</p>
  </div>
`;

const infoPacienteColposcopia = `
  <div class="info-paciente">
    <h3>Información para la paciente</h3>
    <p>El resultado de su prueba de cribado indica la necesidad de realizar una valoración más detallada del cuello del útero (cérvix).</p>
    <p>Esto significa que la prueba ha detectado cambios que aconsejan estudiar la zona con mayor detalle para descartar o confirmar la presencia de una lesión en el cuello del útero.</p>
    <p><strong>Este resultado no significa que tenga cáncer.</strong></p>
    <p>Según las guías clínicas actuales, cuando el riesgo estimado de presentar una lesión en el cuello del útero es igual o superior al 5 %, se recomienda realizar una colposcopia.</p>
    <p>La colposcopia es una prueba sencilla que permite al profesional sanitario observar con aumento el cuello del útero mediante un aparato similar a una lupa con luz, llamado colposcopio.</p>
    <p>Durante la exploración, se aplica un líquido especial sobre el cuello del útero que ayuda a identificar posibles zonas con cambios celulares.</p>
    <p>La prueba se realiza en consulta, es similar a una revisión ginecológica habitual y no requiere ingreso ni anestesia general.</p>
    <p>En algunos casos, si el profesional observa una zona que necesita estudiarse mejor, puede tomar una pequeña muestra de tejido (biopsia) para analizarla.</p>
    <p>La mayoría de las veces, esta prueba sirve para confirmar que los cambios son leves o para detectar precozmente lesiones que pueden tratarse de forma sencilla antes de que progresen.</p>
    <p>La recomendación de realizar una colposcopia forma parte del seguimiento habitual del programa de cribado y permite actuar de manera preventiva.</p>
    <p>Es importante acudir a la cita programada para completar el estudio.</p>
  </div>
`;

// ==============================
// FORMULARIOS
// ==============================

function mostrarFormulario() {
  const tipo = document.getElementById("tipo").value;
  const formulario = document.getElementById("formulario");
  limpiarResultado();

  if (tipo === "cribado") {
    formulario.innerHTML = `
      <div class="form-group">
        <label for="citologia">Resultado de citología</label>
        <select id="citologia">
          <option value="">Selecciona una opción</option>
          <option value="no_realizada">Citología no realizada</option>
          <option value="no_valorable">No valorable / no concluyente</option>
          <option value="normal">Normal</option>
          <option value="ascus">ASC-US</option>
          <option value="lsil">LSIL</option>
          <option value="hsil">ASC-H / HSIL / AGC / Cáncer</option>
        </select>
      </div>

      <div class="form-group">
        <label for="vph">Resultado de VPH</label>
        <select id="vph">
          <option value="">Selecciona una opción</option>
          <option value="negativo">Negativo</option>
          <option value="no_1618">VPH AR positivo no 16/18</option>
          <option value="1618">VPH 16/18 positivo</option>
          <option value="no_realizado">No realizado</option>
        </select>
      </div>

      <div id="extra"></div>
    `;
  }

  if (tipo === "seguimiento") {
    formulario.innerHTML = `
      <div class="form-group">
        <label for="origenSeguimiento">Seguimiento indicado previamente</label>
        <select id="origenSeguimiento" onchange="mostrarSeguimiento()">
          <option value="">Selecciona una opción</option>
          <option value="cotest_3">Co-test a 3 años</option>
          <option value="cotest_1">Co-test a 1 año</option>
        </select>
      </div>

      <div id="seguimientoExtra"></div>
    `;
  }
}

// ==============================
// CÁLCULO PRINCIPAL
// ==============================

function calcular() {
  const tipo = document.getElementById("tipo").value;

  if (!tipo) {
    mostrarResultado("Selecciona una situación clínica", "control");
    return;
  }

  if (tipo === "cribado") calcularCribado();
  if (tipo === "seguimiento") calcularSeguimiento();
}

// ==============================
// CRIBADO
// ==============================

function calcularCribado() {
  const cit = document.getElementById("citologia")?.value;
  const vph = document.getElementById("vph")?.value;
  const extra = document.getElementById("extra");

  if (!cit) {
    mostrarResultado("Selecciona el resultado de citología", "control");
    return;
  }

  if (!vph && cit !== "no_valorable" && cit !== "hsil") {
    mostrarResultado("Selecciona el resultado de VPH", "control");
    return;
  }

  if ((cit === "no_realizada" || cit === "normal") && vph === "negativo") {
    mostrarResultado("VPH en 5 años", "cribado", infoPacienteVphNegativo);
    return;
  }

  if (cit === "normal" && vph === "no_realizado") {
    mostrarResultado("Citología en 3 años", "cribado", infoPacienteCitologiaNormal);
    return;
  }

  if (cit === "ascus" && vph === "negativo") {
    mostrarResultado("Co-test en 3 años", "control", infoPacienteAscusVphNegativo);
    return;
  }

  if (cit === "no_valorable") {
    extra.innerHTML = `
      <div class="form-group">
        <label for="previo">¿Previo inmediato también no valorable?</label>
        <select id="previo" onchange="resolverNoValorable()">
          <option value="">Selecciona</option>
          <option value="si">Sí</option>
          <option value="no">No</option>
        </select>
      </div>
    `;
    mostrarResultado("Completa la información adicional", "control");
    return;
  }

  if (cit === "ascus") {
    if (vph === "1618") {
      mostrarResultado("Colposcopia", "colposcopia");
      return;
    }

    if (vph === "no_1618") {
      pedirMenopausia();
      return;
    }

    if (vph === "no_realizado") {
      mostrarResultado("Realizar prueba de VPH", "control");
      return;
    }
  }

  if (cit === "lsil") {
    if (vph === "negativo") {
      mostrarResultado("Co-test en 1 año", "control");
      return;
    }

    if (vph === "1618") {
      mostrarResultado("Colposcopia", "colposcopia");
      return;
    }

    if (vph === "no_1618") {
      pedirMenopausia();
      return;
    }

    if (vph === "no_realizado") {
      mostrarResultado("Realizar prueba de VPH", "control");
      return;
    }
  }

  // ASC-H / HSIL / AGC / Cáncer agrupados
  if (cit === "hsil") {
    mostrarResultado("Colposcopia", "colposcopia");
    return;
  }

  mostrarResultado("Completa los datos", "control");
}

// ==============================
// NO VALORABLE
// ==============================

function resolverNoValorable() {
  const valor = document.getElementById("previo").value;

  if (valor === "si") {
    mostrarResultado("Colposcopia", "colposcopia");
    return;
  }

  if (valor === "no") {
    mostrarResultado("Repetir toma en 2-4 meses", "control");
    return;
  }

  mostrarResultado("Selecciona una opción", "control");
}

// ==============================
// MENOPAUSIA
// ==============================

function pedirMenopausia() {
  document.getElementById("extra").innerHTML = `
    <div class="form-group">
      <label for="meno">¿Paciente menopáusica?</label>
      <select id="meno" onchange="resolverMenopausia()">
        <option value="">Selecciona</option>
        <option value="si">Sí</option>
        <option value="no">No</option>
      </select>
    </div>
  `;

  mostrarResultado("Completa la información adicional", "control");
}

function resolverMenopausia() {
  const val = document.getElementById("meno").value;

  if (val === "si") {
    mostrarResultado("Colposcopia", "colposcopia");
    return;
  }

  if (val === "no") {
    mostrarResultado("Co-test en 1 año", "control");
    return;
  }

  mostrarResultado("Selecciona una opción", "control");
}

// ==============================
// SEGUIMIENTO
// ==============================

function mostrarSeguimiento() {
  const origen = document.getElementById("origenSeguimiento").value;
  const seguimientoExtra = document.getElementById("seguimientoExtra");

  limpiarResultado();

  if (!origen) {
    seguimientoExtra.innerHTML = "";
    return;
  }

  seguimientoExtra.innerHTML = `
    <div class="form-group">
      <label for="citologiaSeguimiento">Resultado de citología en seguimiento</label>
      <select id="citologiaSeguimiento">
        <option value="">Selecciona una opción</option>
        <option value="normal">Normal</option>
        <option value="ascus">ASC-US</option>
        <option value="lsil">LSIL</option>
        <option value="hsil">ASC-H / HSIL / AGC / Cáncer</option>
        <option value="no_valorable">No valorable / no concluyente</option>
      </select>
    </div>

    <div class="form-group">
      <label for="vphSeguimiento">Resultado de VPH en seguimiento</label>
      <select id="vphSeguimiento">
        <option value="">Selecciona una opción</option>
        <option value="negativo">Negativo</option>
        <option value="no_1618">VPH AR positivo no 16/18</option>
        <option value="1618">VPH 16/18 positivo</option>
      </select>
    </div>
  `;
}

function calcularSeguimiento() {
  const origen = document.getElementById("origenSeguimiento")?.value;
  const cit = document.getElementById("citologiaSeguimiento")?.value;
  const vph = document.getElementById("vphSeguimiento")?.value;

  if (!origen) {
    mostrarResultado("Selecciona el tipo de seguimiento", "control");
    return;
  }

  if (!cit) {
    mostrarResultado("Selecciona el resultado de citología", "control");
    return;
  }

  if (!vph && cit !== "hsil") {
    mostrarResultado("Selecciona el resultado de VPH", "control");
    return;
  }

  if (cit === "hsil") {
    mostrarResultado("Colposcopia", "colposcopia");
    return;
  }

  if (cit === "no_valorable") {
    mostrarResultado("Repetir toma", "control");
    return;
  }

  if (origen === "cotest_3") {
    if (cit === "normal" && vph === "negativo") {
      mostrarResultado("Volver a cribado rutinario", "cribado");
      return;
    }

    mostrarResultado("Colposcopia", "colposcopia");
    return;
  }

  if (origen === "cotest_1") {
    if (cit === "normal" && vph === "negativo") {
      mostrarResultado("Co-test en 3 años", "control");
      return;
    }

    mostrarResultado("Colposcopia", "colposcopia");
    return;
  }

  mostrarResultado("Completa los datos", "control");
}

// ==============================
// MOSTRAR RESULTADO
// ==============================

function mostrarResultado(texto, tipo, info = "") {
  const r = document.getElementById("resultado");

  if (tipo === "colposcopia") {
    info += infoPacienteColposcopia;
  }

  if (texto.toLowerCase().includes("co-test en 1 año")) {
    info += infoPacienteCotest1Anio;
  }

  if (info) {
    info += infoPacienteRecomendacionesGenerales;
  }

  r.innerHTML = `<div class="recomendacion">${texto}</div>${info}`;
  r.className = `resultado ${tipo}`;
}

// ==============================
// LIMPIAR / REINICIAR
// ==============================

function limpiarResultado() {
  const r = document.getElementById("resultado");
  r.innerHTML = "";
  r.className = "resultado hidden";
}

function reiniciar() {
  location.reload();
}