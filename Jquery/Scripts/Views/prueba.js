/// <reference path="../jquery-3.6.0.slim.min.js" />

//const { get } = require("jquery");


//-----GET------

function TodosJugadores() {
    $.ajax(
        {
            type: "GET",
            url:"https://localhost:44378/api/Jugadores",
            datatype:"json",
                success: function (data, textStatus, jqXHR) {
                    $.each(data, function (key, value) {
                        $(
                            '<tr>' +
                            '<td>' + value.cod_jugador + '</td>' +
                            '<td>' + value.nombre_jugador + '</td>' +
                            '<td>' + value.apellido_jugador + '</td>' +
                            '<td>' + value.edad_jugador + '</td>' +
                            '<td>' + value.cod_equipo + '</td>' +
                            '</tr>'
                        ).appendTo("#Jugadores");
                    }
                    );
                },
                error: function (jqHHR, textStatus, errorThrown){
                    alert('Estatus: ' + textStatus + '(' + errorThrown + ')');
                }
        }
    );
}

function TodosEquipos() {
    $.ajax(
        {
            type: "GET",
            url: "https://localhost:44378/api/equipos",
            datatype: "json",
            success: function (data, textStatus, jqXHR) {
                $.each(data, function (key, value) {
                    $(
                        '<tr>' +
                        '<td>' + value.cod_equipo + '</td>' +
                        '<td>' + value.nombre_equipo + '</td>' +
                        '<td>' + value.añofund_equipo + '</td>' +
                        '<td>' + value.cod_estadio + '</td>' +
                        '<td>' + value.cod_pais + '</td>' +
                        '</tr>'
                    ).appendTo("#Equipos");
                }
                );
            },
            error: function (jqHHR, textStatus, errorThrown) {
                alert('Estatus: ' + textStatus + '(' + errorThrown + ')');
            }
        }
    );
}

function TodosEstadios() {
    $.ajax(
        {
            type: "GET",
            url: "https://localhost:44378/api/Estadios",
            datatype: "json",
            success: function (data, textStatus, jqXHR) {
                $.each(data, function (key, value) {
                    $(
                        '<tr>' +
                        '<td>' + value.cod_estadio + '</td>' +
                        '<td>' + value.nombre_estadio + '</td>' +
                        '<td>' + value.ciudad_estadio + '</td>' +
                        '<td>' + value.aforo_estadio + '</td>' +                        
                        '</tr>'
                    ).appendTo("#Estadios");
                }
                );
            },
            error: function (jqHHR, textStatus, errorThrown) {
                alert('Estatus: ' + textStatus + '(' + errorThrown + ')');
            }
        }
    );
}

function TodosPaises() {
    $.ajax(
        {
            type: "GET",
            url: "https://localhost:44378/api/Paises",
            datatype: "json",
            success: function (data, textStatus, jqXHR) {
                $.each(data, function (key, value) {
                    $(
                        '<tr>' +
                        '<td>' + value.cod_pais + '</td>' +
                        '<td>' + value.nombre_pais + '</td>' +                        
                        '</tr>'
                    ).appendTo("#Paises");
                }
                );
            },
            error: function (jqHHR, textStatus, errorThrown) {
                alert('Estatus: ' + textStatus + '(' + errorThrown + ')');
            }
        }
    );
}


//------GET BY ID-----

function JugadorPorId(id) {
    $.ajax(
        {
            type: "GET",
            url: "https://localhost:44378/api/Jugadores/" + id,
            dataType: "json",
            success: function (data) {
                detail = '<div><strong>id</strong></div>' + '<div>' + data.cod_jugador + '<br /><br /></div>' +
                    '<div><strong>Nombre</strong></div>' + '<div>' + data.nombre_jugador + '<br /><br /></div>' +
                    '<div><strong>Apellido</strong></div>' + '<div>' + data.apellido_jugador + '<br /><br /></div>' +
                    '<div><strong>Edad</strong></div>' + '<div>' + data.edad_jugador + '<br /><br /></div>' +
                    '<div><strong>Equipo</strong></div>' + '<div>' + data.cod_equipo + '<br /><br /></div>';
                    $("#Jugador").html(detail);
            },
            error: function (jqHHR, textStatus, errorThrown) {
                alert('Estatus: ' + textStatus + '(' + errorThrown + ')');
            }
        }
    );
}

function EquipoPorId(id) {
    $.ajax(
        {
            type: "GET",
            url: "https://localhost:44378/api/Equipos/" + id,
            dataType: "json",
            success: function (data) {
                detail = '<div><strong>id</strong></div>' + '<div>' + data.cod_equipo + '<br /><br /></div>' +
                    '<div><strong>Nombre</strong></div>' + '<div>' + data.nombre_equipo + '<br /><br /></div>' +
                    '<div><strong>Año de Fundacion</strong></div>' + '<div>' + data.añofund_equipo + '<br /><br /></div>' +
                    '<div><strong>Estadio</strong></div>' + '<div>' + data.cod_estadio + '<br /><br /></div>' +
                    '<div><strong>Pais</strong></div>' + '<div>' + data.cod_pais + '<br /><br /></div>';
                $("#Equipo").html(detail);
            },
            error: function (jqHHR, textStatus, errorThrown) {
                alert('Estatus: ' + textStatus + '(' + errorThrown + ')');
            }
        }
    );
}

function EstadioPorId(id) {
    $.ajax(
        {
            type: "GET",
            url: "https://localhost:44378/api/Estadios/" + id,
            dataType: "json",
            success: function (data) {
                detail = '<div><strong>id</strong></div>' + '<div>' + data.cod_estadio + '<br /><br /></div>' +
                    '<div><strong>Nombre</strong></div>' + '<div>' + data.nombre_estadio + '<br /><br /></div>' +
                    '<div><strong>Ciudad</strong></div>' + '<div>' + data.ciudad_estadio + '<br /><br /></div>' +
                    '<div><strong>Aforo</strong></div>' + '<div>' + data.aforo_estadio + '<br /><br /></div>';
                $("#Estadio").html(detail);
            },
            error: function (jqHHR, textStatus, errorThrown) {
                alert('Estatus: ' + textStatus + '(' + errorThrown + ')');
            }
        }
    );
}

function PaisPorId(id) {
    $.ajax(
        {
            type: "GET",
            url: "https://localhost:44378/api/Paises/" + id,
            dataType: "json",
            success: function (data) {
                detail = '<div><strong>id</strong></div>' + '<div>' + data.cod_pais + '<br /><br /></div>' +
                    '<div><strong>Nombre</strong></div>' + '<div>' + data.nombre_pais + '<br /><br /></div>';
                $("#Pais").html(detail);
            },
            error: function (jqHHR, textStatus, errorThrown) {
                alert('Estatus: ' + textStatus + '(' + errorThrown + ')');
            }
        }
    );
}


//--------POST-------

function CrearJugador() {
    var jugadorNuevo =
    {
        nombre_jugador: $("#nombre").val(),
        apellido_jugador: $("#apellido").val(),
        edad_jugador: $("#edad").val(),
        cod_equipo: $("#valorEquipo").val(),
    };

    $.ajax(
        {
            type: "POST",
            url: "https://localhost:44378/api/Jugadores/",
            data: JSON.stringify(jugadorNuevo),
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            success: function (data, status, jqXHR) {
                alert("Se ha creado el jugador correctamente");
                location.reload(true);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                alert("Estatus: " + textStatus + "(" + errorThrown + ")");
            }
        }
    );
}

function CrearEquipo() {
    var equipoNuevo =
    {
        nombre_equipo: $("#nombre").val(),
        añofund_equipo: $("#fundacion").val(),
        cod_estadio: $("#valorEstadio").val(),
        cod_pais: $("#valorPais").val(),
    };

    $.ajax(
        {
            type: "POST",
            url: "https://localhost:44378/api/Equipos/",
            data: JSON.stringify(equipoNuevo),
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            success: function (data, status, jqXHR) {
                alert("Se ha creado el equipo correctamente");
                location.reload(true);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                alert("Estatus: " + textStatus + "(" + errorThrown + ")");
            }
        }
    );
}

function CrearEstadio() {
    var estadioNuevo =
    {
        nombre_estadio: $("#nombre").val(),
        ciudad_estadio: $("#ciudad").val(),
        aforo_estadio: $("#aforo").val(),        
    };

    $.ajax(
        {
            type: "POST",
            url: "https://localhost:44378/api/Estadios/",
            data: JSON.stringify(estadioNuevo),
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            success: function (data, status, jqXHR) {
                alert("Se ha creado el estadio correctamente");
            },
            error: function (jqXHR, textStatus, errorThrown) {
                alert("Estatus: " + textStatus + "(" + errorThrown + ")");
            }
        }
    );
}

function CrearPais() {
    var paisNuevo =
    {
        nombre_pais: $("#nombre").val(),        
    };

    $.ajax(
        {
            type: "POST",
            url: "https://localhost:44378/api/Paises/",
            data: JSON.stringify(paisNuevo),
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            success: function (data, status, jqXHR) {
                alert("Se ha creado el pais correctamente");
            },
            error: function (jqXHR, textStatus, errorThrown) {
                alert("Estatus: " + textStatus + "(" + errorThrown + ")");
            }
        }
    );
}


//-------PUT--------

function ActualizarJugador(id) {
    var Jugador =
    {
        cod_jugador: id,
        nombre_jugador: $("#nombre").val(),
        apellido_jugador: $("#apellido").val(),
        edad_jugador: $("#edad").val(),
        cod_equipo: $("#valorEquipo").val(),
    };
    $.ajax(
        {
            type: "PUT",
            url: "https://localhost:44378/api/Jugadores/"+id,
            data: JSON.stringify(Jugador),
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            success: function (data, status, jqXHR) {
                alert("Jugador actualizado correctamente");
                location.reload(true);
            },
            error: function (jqHHR, textStatus, errorThrown) {
                alert('Estatus: ' + textStatus + '(' + errorThrown + ')');
            }
        }
    );
}

function ActualizarEquipo(id) {
    var Equipo =
    {
        cod_equipo: id,
        nombre_equipo: $("#nombre").val(),
        añofund_equipo: $("#fundacion").val(),
        cod_estadio: $("#valorEstadio").val(),
        cod_pais: $("#valorPais").val(),
    };
    $.ajax(
        {
            type: "PUT",
            url: "https://localhost:44378/api/Equipos/" + id,
            data: JSON.stringify(Equipo),
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            success: function (data, status, jqXHR) {
                alert("Equipo actualizado correctamente");
                location.reload(true);
            },
            error: function (jqHHR, textStatus, errorThrown) {
                alert('Estatus: ' + textStatus + '(' + errorThrown + ')');
            }
        }
    );
}

function ActualizarEstadio(id) {
    var Estadio =
    {
        cod_estadio: id,
        nombre_estadio: $("#nombre").val(),
        ciudad_estadio: $("#ciudad").val(),
        aforo_estadio: $("#aforo").val(),        
    };
    $.ajax(
        {
            type: "PUT",
            url: "https://localhost:44378/api/Estadios/" + id,
            data: JSON.stringify(Estadio),
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            success: function (data, status, jqXHR) {
                alert("Estadio actualizado correctamente");
                location.reload(true);
            },
            error: function (jqHHR, textStatus, errorThrown) {
                alert('Estatus: ' + textStatus + '(' + errorThrown + ')');
            }
        }
    );
}

function ActualizarPais(id) {
    var Pais =
    {
        cod_pais: id,
        nombre_pais: $("#nombre").val(),        
    };
    $.ajax(
        {
            type: "PUT",
            url: "https://localhost:44378/api/Paises/" + id,
            data: JSON.stringify(Pais),
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            success: function (data, status, jqXHR) {
                alert("Pais actualizado correctamente");
                location.reload(true);
            },
            error: function (jqHHR, textStatus, errorThrown) {
                alert('Estatus: ' + textStatus + '(' + errorThrown + ')');
            }
        }
    );
}


//-------DELETE------

function EliminarJugador(id) {
    $.ajax(
        {
            type: "DELETE",
            url: "https://localhost:44378/api/Jugadores/" + id,
            dataType: "json",
            success: function (data) {
                alert("Jugador eliminado correctamente");
                location.reload(true);
            },
            error: function (jqHHR, textStatus, errorThrown) {
                alert('Estatus: ' + textStatus + '(' + errorThrown + ')');
            }
        }
    );
}

function EliminarEquipo(id) {
    $.ajax(
        {
            type: "DELETE",
            url: "https://localhost:44378/api/Equipos/" + id,
            dataType: "json",
            success: function (data) {
                alert("Equipo eliminado correctamente");
                location.reload(true);
            },
            error: function (jqHHR, textStatus, errorThrown) {
                alert('Estatus: ' + textStatus + '(' + errorThrown + ')');
            }
        }
    );
}

function EliminarEstadio(id) {
    $.ajax(
        {
            type: "DELETE",
            url: "https://localhost:44378/api/Estadios/" + id,
            dataType: "json",
            success: function (data) {
                alert("Estadio eliminado correctamente");
                location.reload(true);
            },
            error: function (jqHHR, textStatus, errorThrown) {
                alert('Estatus: ' + textStatus + '(' + errorThrown + ')');
            }
        }
    );
}

function EliminarPais(id) {
    $.ajax(
        {
            type: "DELETE",
            url: "https://localhost:44378/api/Paises/" + id,
            dataType: "json",
            success: function (data) {
                alert("Pais eliminado correctamente");
                location.reload(true);
            },
            error: function (jqHHR, textStatus, errorThrown) {
                alert('Estatus: ' + textStatus + '(' + errorThrown + ')');
            }
        }
    );
}



//------Funciones HTML------

function LlenarEstadio() {
    $.ajax(
        {
            type: "GET",
            url: "https://localhost:44378/api/Estadios",
            datatype: "json",
            success: function (data, textStatus, jqXHR) {
                $.each(data, function (key, value) {
                    $(
                        '<option>'+value.nombre_estadio+'</option>'
                    ).appendTo("#cmbEstadioNombre");
                }
                );
            },
            error: function (jqHHR, textStatus, errorThrown) {
                alert('Estatus: ' + textStatus + '(' + errorThrown + ')');
            }
        }
    );
}

function LlenarPais() {
    $.ajax(
        {
            type: "GET",
            url: "https://localhost:44378/api/Paises",
            datatype: "json",
            success: function (data, textStatus, jqXHR) {
                $.each(data, function (key, value) {
                    $(
                        '<option>' + value.nombre_pais + '</option>'
                    ).appendTo("#cmbPaisNombre");
                }
                );
            },
            error: function (jqHHR, textStatus, errorThrown) {
                alert('Estatus: ' + textStatus + '(' + errorThrown + ')');
            }
        }
    );
}

function LlenarEquipo() {
    $.ajax(
        {
            type: "GET",
            url: "https://localhost:44378/api/Equipos",
            datatype: "json",
            success: function (data, textStatus, jqXHR) {
                $.each(data, function (key, value) {
                    $(
                        '<option>' + value.nombre_equipo + '</option>'
                    ).appendTo("#cmbEquipoNombre");
                }
                );
            },
            error: function (jqHHR, textStatus, errorThrown) {
                alert('Estatus: ' + textStatus + '(' + errorThrown + ')');
            }
        }
    );
}

function LlenarJugador() {
    $.ajax(
        {
            type: "GET",
            url: "https://localhost:44378/api/Jugadores",
            datatype: "json",
            success: function (data, textStatus, jqXHR) {
                $.each(data, function (key, value) {
                    $(
                        '<option>' + value.apellido_jugador+ '</option>'
                    ).appendTo("#cmbJugadorNombre");
                }
                );
            },
            error: function (jqHHR, textStatus, errorThrown) {
                alert('Estatus: ' + textStatus + '(' + errorThrown + ')');
            }
        }
    );
}


function LlenarTablaEquipos() {
    GetEquipos().done(function (result) {
        console.log(result);
        $.each(result, function (key, value) {
            EstadioPorId2(value.cod_estadio).done(function (result) {
                var es1 = result.nombre_estadio;
                PaisPorId2(value.cod_pais).done(function (result) {
                    var pa1 = result.nombre_pais;
                    $(
                        '<tr>' +
                        '<td>' + value.cod_equipo + '</td>' +
                        '<td>' + value.nombre_equipo + '</td>' +
                        '<td>' + value.añofund_equipo + '</td>' +
                        '<td>' + es1 + '</td>' +
                        '<td>' + pa1 + '</td>' +
                        '</tr>'
                    ).appendTo("#Equipos")
                });
                
            });
        });
    });
}

function LlenarTablaJugadores() {
    GetJugadores().done(function (result) {
        console.log(result);
        $.each(result, function (key, value) {
            EquipoPorId2(value.cod_equipo).done(function (result) {
                var eq1 = result.nombre_equipo;
                $(
                    '<tr>' +
                    '<td>' + value.cod_jugador + '</td>' +
                    '<td>' + value.nombre_jugador + '</td>' +
                    '<td>' + value.apellido_jugador + '</td>' +
                    '<td>' + value.edad_jugador + '</td>' +
                    '<td>' + eq1 + '</td>' +
                    '</tr>'
                ).appendTo("#Jugadores");
            });
        });
    });
}


function GetEquipos() {
    return $.ajax(
        {
            type: "GET",
            url: "https://localhost:44378/api/equipos",
            datatype: "json",            
        }
    );
}

function GetJugadores() {
    return $.ajax(
        {
            type: "GET",
            url: "https://localhost:44378/api/jugadores",
            datatype: "json",
        }
    );
}

function GetPaises() {
    return $.ajax(
        {
            type: "GET",
            url: "https://localhost:44378/api/paises",
            datatype: "json",
        }
    );
}

function GetEstadios() {
    return $.ajax(
        {
            type: "GET",
            url: "https://localhost:44378/api/estadios",
            datatype: "json",
        }
    );
}



function EquipoPorId2(id){
    return $.ajax(
        {
            type: "GET",
            url: "https://localhost:44378/api/Equipos/" + id,
            dataType: "json",
        }
    )
}

function EstadioPorId2(id) {
    return $.ajax(
        {
            type: "GET",
            url: "https://localhost:44378/api/Estadios/" + id,
            dataType: "json",
        }
    )
}

function PaisPorId2(id) {
    return $.ajax(
        {
            type: "GET",
            url: "https://localhost:44378/api/Paises/" + id,
            dataType: "json",
        }
    )
}




function ObtenerCodPais(pais) {    
    GetPaises().done(function (result) {
        $.each(result, function (key, value) {
            if (pais == value.nombre_pais) {                
                $("#valorPais").val(value.cod_pais);                
            }
        });
    });
    
}

function ObtenerCodEstadio(estadio) {
    GetEstadios().done(function (result) {
        $.each(result, function (key, value) {
            if (estadio == value.nombre_estadio) {
                $("#valorEstadio").val(value.cod_estadio);
            }
        });
    });

}

function ObtenerCodEquipo(equipo) {
    GetEquipos().done(function (result) {
        $.each(result, function (key, value) {
            if (equipo == value.nombre_equipo) {
                $("#valorEquipo").val(value.cod_equipo);
            }
        });
    });

}

function ObtenerCodJugador(jugador) {
    GetJugadores().done(function (result) {
        $.each(result, function (key, value) {
            if (jugador == value.apellido_jugador) {
                $("#valorJugador").val(value.cod_jugador);
            }
        });
    });

}







function GetNombreEstadio(id) {    
    GetEstadios().done(function (result) {
        $.each(result, function (key, value) {
            if (id == value.cod_estadio) {
                $("#cmbEstadioNombre").val(value.nombre_estadio);                
            }
        });
    });    
}

function GetNombrePais(id) {
    GetPaises().done(function (result) {
        $.each(result, function (key, value) {
            if (id == value.cod_pais) {
                $("#cmbPaisNombre").val(value.nombre_pais);
            }
        });
    });
}

function GetNombreEquipo(id) {
    GetEquipos().done(function (result) {
        $.each(result, function (key, value) {
            if (id == value.cod_equipo) {
                $("#cmbEquipoNombre").val(value.nombre_equipo);
            }
        });
    });
}

function RellenarEstadio(id) {
    $.ajax(
        {
            type: "GET",
            url: "https://localhost:44378/api/Estadios/" + id,
            datatype: "json",
            success: function (data) {
                $("#nombre").val(data.nombre_estadio);
                $("#ciudad").val(data.ciudad_estadio);
                $("#aforo").val(data.aforo_estadio);
            },
            error: function (jqHHR, textStatus, errorThrown) {
                alert('Estatus: ' + textStatus + '(' + errorThrown + ')');
            }
        }
    );
}

function RellenarPais(id) {
    $.ajax(
        {
            type: "GET",
            url: "https://localhost:44378/api/Paises/" + id,
            datatype: "json",
            success: function (data) {
                $("#nombre").val(data.nombre_pais);
            },
            error: function (jqHHR, textStatus, errorThrown) {
                alert('Estatus: ' + textStatus + '(' + errorThrown + ')');
            }
        }
    );
}

function RellenarEquipo(id) {
    $.ajax(
        {
            type: "GET",
            url: "https://localhost:44378/api/Equipos/" + id,
            datatype: "json",
            success: function (data) {
                $("#nombre").val(data.nombre_equipo);
                $("#fundacion").val(data.añofund_equipo);
                GetNombreEstadio(data.cod_estadio);
                GetNombrePais(data.cod_pais);
            },
            error: function (jqHHR, textStatus, errorThrown) {
                alert('Estatus: ' + textStatus + '(' + errorThrown + ')');
            }
        }
    );
}

function RellenarJugador(id) {
    $.ajax(
        {
            type: "GET",
            url: "https://localhost:44378/api/Jugadores/" + id,
            datatype: "json",
            success: function (data) {
                $("#nombre").val(data.nombre_jugador);
                $("#apellido").val(data.apellido_jugador);
                $("#edad").val(data.edad_jugador);
                GetNombreEquipo(data.cod_equipo);                
            },
            error: function (jqHHR, textStatus, errorThrown) {
                alert('Estatus: ' + textStatus + '(' + errorThrown + ')');
            }
        }
    );
}