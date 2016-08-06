@__dbupdater__ = null
@include = ->
  return @__dbupdater__ if @__dbupdater__
  dbupdater = {}
  dbupdater.log = -> console.log "dbupdater tester"
  config = require \/heliex/node_servers/NODE_HELIEX/server/config.js
  #config = require \D:/work/NODE_HELIEX/server/config.js
  connectionString = "postgres://#{config.db.username}:#{config.db.password}@#{config.db.host}/#{config.db.database}"
  console.log connectionString
  massive = require \massive
  db = massive.connectSync {connectionString: connectionString}
  _ = require \underscore
  mapNamesToFields = ['SKU', 'SKU_DESC', 'SUPPLIER', 'LOT_QTY', 'LOT_TYPE', 'START_INV', 'MIN_ORD', 'MAX_ORD', 'MY_ORDER', 'MIN_HOLD', 'MIN_ORDCYCLE', 'MAX_ORDCYCLE', 'MIN_DELCYLE', 'MAX_DELCYLE', 'SUPPLIER_ADDRESS', 'DELIVERY_ADDRESS', 'CUSTOMER', 'ATTENTION', 'CONSOLIDATE_SAME_SUPPLIER', 'ORDERING_DAYS', 'CURRENT_INV']
  
  dbupdater.update = (id, name, value, callback) ->
    field = mapNamesToFields.indexOf name
    if field == -1
      return callback "[#{name} NOT FOUND]"
    field = 's' + (field + 1)
    console.log "#{name} = #{field}"
    console.log db.heliexdb
    db.mldata.find {mldetailsid: id, node: 'settings', thedatatype:'data'}, (err, mldata) ->
      if err == null && mldata != null
        updateFlds = {}
        updateFlds[field] = value
        db.mldata.update {id: mldata[0].id}, updateFlds, (err2, res) ->
          if err2 == null && res[0][field] == value
            callback "[#{name} UPDATED]"
          else
            callback "[#{name} FAILED]"
          console.log "save error: ", err2
          #console.log "save res: ", res && res.length, JSON.stringify res
      else
        callback "[#{name} NOT FOUND]"
      console.log "find error: ", err
      #console.log "find mldata: ", mldata && mldata.length, JSON.stringify mldata
  

  @__dbupdater__ = dbupdater

  